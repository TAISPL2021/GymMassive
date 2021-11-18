package com.spl.derivator;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.maven.model.Dependency;
import org.apache.maven.model.io.xpp3.MavenXpp3Reader;
import org.apache.maven.model.io.xpp3.MavenXpp3Writer;
import org.codehaus.plexus.util.xml.pull.XmlPullParserException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

@SpringBootApplication
public class GymMassiveDerivatorApplication {

	private static Map<String, Dependency> mavenDependences = new HashMap<String, Dependency>();
	private static Map<String, Boolean> ifElseDependences = new HashMap<String, Boolean>();

	public static void main(String[] args) throws IOException {
		SpringApplication.run(GymMassiveDerivatorApplication.class, args);

		// Create dependences
		mavenDependences = mavenDependences();
		ifElseDependences = ifElseDependences();

		readConfiguration();
	}

	/**
	 * This method read the configuration from Feature IDE and modify the archetype
	 * project
	 */
	private static void readConfiguration() throws IOException {

		File fXmlFile = new File("../Variability/configs/default.xml");
		DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
		DocumentBuilder dBuilder;
		try {
			dBuilder = dbFactory.newDocumentBuilder();
			Document doc = dBuilder.parse(fXmlFile);
			doc.getDocumentElement().normalize();
			NodeList nList = doc.getFirstChild().getChildNodes();

			for (int temp = 0; temp < nList.getLength(); temp++) {

				Node nNode = nList.item(temp);
				NamedNodeMap nodeMap = nNode.getAttributes();
				Node nameNode = nodeMap != null ? nodeMap.getNamedItem("name") : null;
				//System.out.println(nameNode != null ? nameNode.getNodeValue() : "nameNode");

				if (isMavenDependence(nodeMap, nameNode)) {
					Node automatic = nodeMap.getNamedItem("automatic");
					Node manual = nodeMap.getNamedItem("manual");

					if (isSelected(automatic, manual)) {
						addDependency(nameNode.getNodeValue());
					}
				}

				if (isIfElseDependence(nodeMap, nameNode)) {
					Node automatic = nodeMap.getNamedItem("automatic");
					Node manual = nodeMap.getNamedItem("manual");

					if (isSelected(automatic, manual)) {
						addProperty(nameNode.getNodeValue(),"true");
					}else {
						addProperty(nameNode.getNodeValue(),"false");
					}
				}
			}
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		} catch (SAXException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Return true if the nodeName is a pom.xml dependency
	 * 
	 * @param nodeMap
	 * @param nameNode
	 * @return
	 */
	private static boolean isMavenDependence(NamedNodeMap nodeMap, Node nameNode) {
		return nodeMap != null && nameNode != null && (mavenDependences.get(nameNode.getNodeValue()) != null);
	}

	/**
	 * Return true if the nodeName is an if dependency
	 * 
	 * @param nodeMap
	 * @param nameNode
	 * @return
	 */
	private static boolean isIfElseDependence(NamedNodeMap nodeMap, Node nameNode) {
		return nodeMap != null && nameNode != null && (ifElseDependences.get(nameNode.getNodeValue()) != null);
	}

	/**
	 * Return true if the dependency is selected
	 * 
	 * @param automatic
	 * @param manual
	 * @return
	 */
	private static boolean isSelected(Node automatic, Node manual) {
		return (automatic != null && automatic.getNodeValue().equals("selected"))
				|| (manual != null && manual.getNodeValue().equals("selected"));
	}
	
	/**
	 * This method change the status of a property into the config.property file 
	 * @param property: the name of the property
	 */
	private static void addProperty(String property,String value) throws IOException {

		InputStream inputstream = new FileInputStream("../GymMassiveBE/gym-massive-core/src/main/resources/application.properties");
		Properties prop = new Properties();
		prop.load(inputstream);
		inputstream.close();

		OutputStream outputStream = new FileOutputStream("../GymMassiveBE/gym-massive-core/src/main/resources/application.properties");
		prop.setProperty(property, value);
		prop.store(outputStream, null);

	}
	
	/**
	 * This method add a dependency to the archetype pom.xml 
	 * @param dependency: the name of the dependency
	 */
	private static void addDependency(String dependency) {
		MavenXpp3Reader reader = new MavenXpp3Reader();
		org.apache.maven.model.Model model;
		try {
			model = reader.read(new FileReader("../GymMassiveBE/gym-massive-core/pom.xml"));
			model.addDependency(mavenDependences.get(dependency));
			MavenXpp3Writer writer = new MavenXpp3Writer();
			writer.write(new FileOutputStream(new File("../GymMassiveBE/gym-massive-core/pom.xml")), model);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (XmlPullParserException e) {
			e.printStackTrace();
		}
	}

	private static Map<String, Dependency> mavenDependences() {
		Map<String, Dependency> dependencies = new HashMap<String, Dependency>();
		String version = "0.0.1-SNAPSHOT";
		String type = "jar";

		Dependency training = new Dependency();
		training.setGroupId("com.spl.gymmassive.training");
		training.setArtifactId("gym-massive-training");
		training.setType(type);
		training.setVersion(version);
		dependencies.put("Training", training);

		return dependencies;
	}

	private static Map<String, Boolean> ifElseDependences() {
		Map<String, Boolean> dependencies = new HashMap<String, Boolean>();
		dependencies.put("BookClass", true);
		dependencies.put("ManageBooking", true);
		dependencies.put("ManageSuscription", true);
		dependencies.put("SuscribePlan", true);
		dependencies.put("MonthPlan", true);
		dependencies.put("YearPlan", true);
		dependencies.put("QuarterPlan", true);
		dependencies.put("CreateRoutines", true);
		dependencies.put("NotifyEmail", true);
		return dependencies;
	}

}
