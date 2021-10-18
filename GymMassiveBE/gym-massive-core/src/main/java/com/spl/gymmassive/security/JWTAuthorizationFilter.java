/**
 * 
 */
package com.spl.gymmassive.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spl.gymmassive.mod.res.ErrorResponse;
import com.spl.gymmassive.util.JWTUtil;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;

/**
 * @author brayan.guerrero
 *
 */
@Component
public class JWTAuthorizationFilter extends OncePerRequestFilter {

	private static final String TOKEN_HEADER_EXCEPTION_MESSAGE = "Token header not found";
	private static final String APPLICATION_JSON = "application/json";
	private static final String HEADER = "Authorization";
	private static final String PREFIX = "Bearer ";
	private static final List<String> URLS_LIST_WITH_OUT_TOKEN_HEADER = new ArrayList<>(
			Arrays.asList("/healthcheck", "/auth/login"));

	private ObjectMapper objectMapper;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws ServletException, IOException {
		try {
			String uri = request.getRequestURI().toString();
			if (!URLS_LIST_WITH_OUT_TOKEN_HEADER.contains(uri)) {
				if (JWTUtil.existsJWTToken(request, response)) {
					String jwtToken = request.getHeader(HEADER).replace(PREFIX, "");
					Claims claims = JWTUtil.validateToken(jwtToken);
//					if (claims.get("authorities") != null) {
//						AuthenticationUtil.setUpSpringAuthentication(claims);
//					} else {
//						SecurityContextHolder.clearContext();
//					}
				} else {
					SecurityContextHolder.clearContext();
					objectMapper = new ObjectMapper();

					ErrorResponse errorResponse = new ErrorResponse();
					errorResponse.setStatus(HttpStatus.BAD_REQUEST.value());
					errorResponse.setMessage(TOKEN_HEADER_EXCEPTION_MESSAGE);

					response.setStatus(HttpStatus.BAD_REQUEST.value());
					response.setContentType(APPLICATION_JSON);
					response.getWriter().write(objectMapper.writeValueAsString(errorResponse));

					return;
				}
			}
			chain.doFilter(request, response);
		} catch (ExpiredJwtException | UnsupportedJwtException | MalformedJwtException e) {
			response.setStatus(HttpServletResponse.SC_FORBIDDEN);
			((HttpServletResponse) response).sendError(HttpServletResponse.SC_FORBIDDEN, e.getMessage());
			return;
		}
	}

}
