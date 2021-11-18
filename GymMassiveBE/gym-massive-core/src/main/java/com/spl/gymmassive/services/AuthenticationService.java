/**
 * 
 */
package com.spl.gymmassive.services;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

//import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.spl.gymmassive.exception.AuthenticationException;
import com.spl.gymmassive.exception.UserNotFoundException;
import com.spl.gymmassive.models.User;
import com.spl.gymmassive.models.request.LoginRequest;
import com.spl.gymmassive.models.response.ConfigurationElement;
import com.spl.gymmassive.models.response.TokenResponse;
import com.spl.gymmassive.repositories.UserRepository;
import com.spl.gymmassive.util.AuthenticationUtil;
import com.spl.gymmassive.util.JWTUtil;

import io.jsonwebtoken.Claims;

/**
 * @author brayan.guerrero
 *
 */
@Component
public class AuthenticationService {

	private static final String INVALID_CREDENTIALS = "User was not authenticated";

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private Environment env;

	public TokenResponse login(LoginRequest loginRequest) {
		User user = userRepository.findByEmail(loginRequest.getEmail())
				.orElseThrow(() -> new UserNotFoundException("User " + loginRequest.getEmail() + " not found."));

		if (!user.getPassword().equals(loginRequest.getPassword())) {
			throw new AuthenticationException(INVALID_CREDENTIALS);
		}

		LocalDateTime nowDate = LocalDateTime.now(ZoneOffset.UTC);
		String token = JWTUtil.getJWTToken(loginRequest.getEmail(), user.getType(), false, nowDate);
		String refreshToken = JWTUtil.getJWTToken(loginRequest.getEmail(), user.getType(), true, nowDate);

		AuthenticationUtil.setUpSpringAuthentication(JWTUtil.validateToken(token.replace("Bearer ", "")));
		List<ConfigurationElement> configuration = getConfiguration();

		return new TokenResponse(user.getType(), configuration, user.getId(), loginRequest.getEmail(), token,
				refreshToken);
	}

	public void logout() {
		SecurityContextHolder.clearContext();
	}

	public TokenResponse refreshToken(HttpServletRequest request) {
		String refreshToken = JWTUtil.extractToken(request);
		Claims claims = JWTUtil.validateToken(refreshToken);
		String email = claims.getSubject();

		User user = userRepository.findByEmail(email)
				.orElseThrow(() -> new UserNotFoundException("User " + email + " not found."));

		LocalDateTime nowDate = LocalDateTime.now(ZoneOffset.UTC);

		String newToken = JWTUtil.getJWTToken(email, user.getType(), false, nowDate);
		List<ConfigurationElement> configuration = getConfiguration();

		return new TokenResponse(user.getType(), configuration, user.getId(), email, newToken, refreshToken);
	}

	private List<ConfigurationElement> getConfiguration() {
		List<ConfigurationElement> configuration = new ArrayList<ConfigurationElement>();
		configuration.add(new ConfigurationElement("BookClass", env.getProperty("BookClass").equalsIgnoreCase("true")));
		configuration.add(
				new ConfigurationElement("ManageBooking", env.getProperty("ManageBooking").equalsIgnoreCase("true")));
		configuration.add(new ConfigurationElement("ManageSuscription",
				env.getProperty("ManageSuscription").equalsIgnoreCase("true")));
		configuration.add(
				new ConfigurationElement("SuscribePlan", env.getProperty("SuscribePlan").equalsIgnoreCase("true")));
		configuration.add(
				new ConfigurationElement("CreateRoutines", env.getProperty("CreateRoutines").equalsIgnoreCase("true")));
		return configuration;
	}

}
