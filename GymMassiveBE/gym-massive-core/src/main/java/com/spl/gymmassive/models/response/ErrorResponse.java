/**
 * 
 */
package com.spl.gymmassive.models.response;

/**
 * @author brayan.guerrero
 *
 */
public class ErrorResponse {

	private int status;
	private String message;

	public ErrorResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ErrorResponse(int status, String message) {
		this.status = status;
		this.message = message;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}