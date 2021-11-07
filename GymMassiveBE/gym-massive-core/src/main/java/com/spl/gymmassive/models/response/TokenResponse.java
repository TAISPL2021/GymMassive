/**
 * 
 */
package com.spl.gymmassive.models.response;

/**
 * @author brayan.guerrero
 *
 */
public class TokenResponse {

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
	 * @param userId
	 * @param email
	 * @param token
	 * @param refreshToken
	 */
	public TokenResponse(String userId, String email, String token, String refreshToken) {
		super();
		this.userId = userId;
		this.email = email;
		this.token = token;
		this.refreshToken = refreshToken;
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
