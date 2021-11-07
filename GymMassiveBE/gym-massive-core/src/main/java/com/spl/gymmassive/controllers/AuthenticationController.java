/**
 * 
 */
package com.spl.gymmassive.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spl.gymmassive.models.request.LoginRequest;
import com.spl.gymmassive.models.response.TokenResponse;
import com.spl.gymmassive.services.AuthenticationService;

/**
 * @author brayan.guerrero
 *
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/auth")
public class AuthenticationController {

	@Autowired
	private AuthenticationService authenticationService;

	@PostMapping(value = "/login")
	public ResponseEntity<TokenResponse> login(@RequestBody LoginRequest loginRequest) {
		return ResponseEntity.ok(authenticationService.login(loginRequest));
	}

	@PostMapping(value = "/refreshToken")
	public ResponseEntity<Object> refreshToken(final HttpServletRequest request) {
		return ResponseEntity.ok(authenticationService.refreshToken(request));
	}
	
	@PostMapping(value = "/logout")
	public ResponseEntity<Void> logout() {
		authenticationService.logout();
		return ResponseEntity.noContent().build();
	}

}
