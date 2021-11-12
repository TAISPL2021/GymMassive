/**
 * 
 */
package com.spl.gymmassive.models.response;

import java.util.List;

/**
 * @author brayan.guerrero
 *
 */
public class TokenResponse {

	private String userType;
	private List<ConfigurationElement> configuration;
	private String userId;
	private String email;
	private String token;
	private String refreshToken;

	/**
	 * 
	 */
	public TokenResponse() {
		super();
	}

	/**
	 * @param userType
	 * @param configuration
	 * @param userId
	 * @param email
	 * @param token
	 * @param refreshToken
	 */
	public TokenResponse(String userType, List<ConfigurationElement> configuration, String userId, String email,
			String token, String refreshToken) {
		super();
		this.userType = userType;
		this.configuration = configuration;
		this.userId = userId;
		this.email = email;
		this.token = token;
		this.refreshToken = refreshToken;
	}

	/**
	 * @return the userType
	 */
	public String getUserType() {
		return userType;
	}

	/**
	 * @param userType the userType to set
	 */
	public void setUserType(String userType) {
		this.userType = userType;
	}

	/**
	 * @return the configuration
	 */
	public List<ConfigurationElement> getConfiguration() {
		return configuration;
	}

	/**
	 * @param configuration the configuration to set
	 */
	public void setConfiguration(List<ConfigurationElement> configuration) {
		this.configuration = configuration;
	}

	/**
	 * @return the userId
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(String userId) {
		this.userId = userId;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the token
	 */
	public String getToken() {
		return token;
	}

	/**
	 * @param token the token to set
	 */
	public void setToken(String token) {
		this.token = token;
	}

	/**
	 * @return the refreshToken
	 */
	public String getRefreshToken() {
		return refreshToken;
	}

	/**
	 * @param refreshToken the refreshToken to set
	 */
	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}

}
