package com.spl.gymmassive.models.response;

public class ConfigurationElement {

	private String configName;
	private boolean enabled;

	/**
	 * @param configName
	 * @param enabled
	 */
	public ConfigurationElement(String configName, boolean enabled) {
		super();
		this.configName = configName;
		this.enabled = enabled;
	}

	/**
	 * 
	 */
	public ConfigurationElement() {
		super();
	}

	/**
	 * @return the configName
	 */
	public String getConfigName() {
		return configName;
	}

	/**
	 * @param configName the configName to set
	 */
	public void setConfigName(String configName) {
		this.configName = configName;
	}

	/**
	 * @return the enabled
	 */
	public boolean isEnabled() {
		return enabled;
	}

	/**
	 * @param enabled the enabled to set
	 */
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

}
