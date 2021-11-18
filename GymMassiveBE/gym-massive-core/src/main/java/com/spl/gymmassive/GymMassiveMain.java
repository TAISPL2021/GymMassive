package com.spl.gymmassive;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.spl.gymmassive.services.PlanService;

@SpringBootApplication
@EnableScheduling
@EnableMongoRepositories
public class GymMassiveMain {

	@Autowired
	private PlanService planService;

	@Autowired
	private Environment env;

	public static void main(String[] args) {
		SpringApplication.run(GymMassiveMain.class, args);
	}

	@PostConstruct
	public void init() {
		if (env.getProperty("SuscribePlan").equalsIgnoreCase("true")) {
			planService.initializePlans();
		}
	}

}
