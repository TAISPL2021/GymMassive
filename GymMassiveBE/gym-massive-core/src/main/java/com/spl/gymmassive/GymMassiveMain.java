package com.spl.gymmassive;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class GymMassiveMain {

	public static void main(String[] args) {
		SpringApplication.run(GymMassiveMain.class, args);

	}

}
