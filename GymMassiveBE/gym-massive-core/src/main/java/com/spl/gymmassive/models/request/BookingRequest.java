package com.spl.gymmassive.models.request;

import com.spl.gymmassive.models.Class;

public class BookingRequest {

	private String userId;
	private com.spl.gymmassive.models.Class clas;
	private String action;

	/**
	 * @param userId
	 * @param clas
	 * @param action
	 */
	public BookingRequest(String userId, Class clas, String action) {
		super();
		this.userId = userId;
		this.clas = clas;
		this.action = action;
	}

	/**
	 * 
	 */
	public BookingRequest() {
		super();
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
	 * @return the clas
	 */
	public com.spl.gymmassive.models.Class getClas() {
		return clas;
	}

	/**
	 * @param clas the clas to set
	 */
	public void setClas(com.spl.gymmassive.models.Class clas) {
		this.clas = clas;
	}

	/**
	 * @return the action
	 */
	public String getAction() {
		return action;
	}

	/**
	 * @param action the action to set
	 */
	public void setAction(String action) {
		this.action = action;
	}

}
