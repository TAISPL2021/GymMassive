package com.spl.gymmassive.util;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * @author brayan.guerrero
 *
 */
public class JWTUtil {

	private static final ZoneId ZONE_ID_UTC = ZoneId.of("UTC");
	private static final String SECRET_KEY = "my-secret-key-Topicos-Avanzados-En-Ingenieria-de-Software-gym-massive";
	private static final String AUTHENTICATION_HEADER_NAME = "Authorization";
	private static final String HEADER_PREFIX = "Bearer ";

	public static String getJWTToken(String email, String type, boolean refreshToken, LocalDateTime nowDate) {
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils
				.commaSeparatedStringToAuthorityList("ROLE_" + type.toUpperCase());

		LocalDateTime expirationDate = refreshToken ? nowDate.plusSeconds(360000) : nowDate.plusSeconds(36000);

		String token = Jwts.builder().setId("GymMassiveJWT").setSubject(email)
				.claim("authorities",
						grantedAuthorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
				.setIssuedAt(Date.from(nowDate.atZone(ZONE_ID_UTC).toInstant()))
				.setExpiration(Date.from(expirationDate.atZone(ZONE_ID_UTC).toInstant()))
				.signWith(SignatureAlgorithm.HS512, SECRET_KEY.getBytes()).compact();

		return "Bearer " + token;
	}

	public static Claims validateToken(String jwtToken) {
		return Jwts.parser().setSigningKey(SECRET_KEY.getBytes()).parseClaimsJws(jwtToken).getBody();
	}

	public static String extractToken(final HttpServletRequest request) {
		return request.getHeader(AUTHENTICATION_HEADER_NAME).substring(HEADER_PREFIX.length());
	}

	public static boolean existsJWTToken(HttpServletRequest request, HttpServletResponse res) {
		String authenticationHeader = request.getHeader(AUTHENTICATION_HEADER_NAME);

		if (authenticationHeader == null || !authenticationHeader.startsWith(HEADER_PREFIX)) {
			return false;
		}

		return true;
	}

}
