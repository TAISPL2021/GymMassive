/**
 * 
 */
package com.spl.gymmassive.models.response;

/**
 * @author brayan.guerrero
 *
 */
public class TokenResponse {

	private String email;
	private String token;
	private String refreshToken;

	public TokenResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TokenResponse(String email, String token, String refreshToken) {
		super();
		this.email = email;
		this.token = token;
		this.refreshToken = refreshToken;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getRefreshToken() {
		return refreshToken;
	}

	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}

}
