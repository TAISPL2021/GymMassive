package com.spl.gymmassive.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author brayan.guerrero
 *
 */
@RestController
@RequestMapping("/healthcheck")
public class HealthCheckController {

	@GetMapping
	public ResponseEntity<String> healthApp() {
		return ResponseEntity.ok("GymMassive app Ok!");
	}

}
