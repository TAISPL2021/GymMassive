/**
 * 
 */
package com.spl.gymmassive.serv;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

import javax.servlet.http.HttpServletRequest;

//import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.spl.gymmassive.exc.AuthenticationException;
import com.spl.gymmassive.exc.UserNotFoundException;
import com.spl.gymmassive.mod.User;
import com.spl.gymmassive.mod.req.LoginRequest;
import com.spl.gymmassive.mod.res.TokenResponse;
import com.spl.gymmassive.rep.UserRepository;
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

		return TokenResponse.builder().email(loginRequest.getEmail()).token(token).refreshToken(refreshToken).build();
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

		return TokenResponse.builder().email(email).token(newToken).refreshToken(refreshToken).build();
	}

}
