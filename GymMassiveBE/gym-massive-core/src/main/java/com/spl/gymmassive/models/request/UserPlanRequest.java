package com.spl.gymmassive.models.request;

public class UserPlanRequest {

	private String userId;
	private String userEmail;
	private String planId;

	/**
	 * 
	 */
	public UserPlanRequest() {
		super();
	}

	/**
	 * @param userId
	 * @param userEmail
	 * @param planId
	 */
	public UserPlanRequest(String userId, String userEmail, String planId) {
		super();
		this.userId = userId;
		this.userEmail = userEmail;
		this.planId = planId;
	}

	/**
	 * @return the userEmail
	 */
	public String getUserEmail() {
		return userEmail;
	}

	/**
	 * @param userEmail the userEmail to set
	 */
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
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
	 * @return the planId
	 */
	public String getPlanId() {
		return planId;
	}

	/**
	 * @param planId the planId to set
	 */
	public void setPlanId(String planId) {
		this.planId = planId;
	}

}
