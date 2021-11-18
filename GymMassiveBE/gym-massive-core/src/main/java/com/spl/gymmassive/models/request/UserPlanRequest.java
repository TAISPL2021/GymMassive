package com.spl.gymmassive.models.request;

public class UserPlanRequest {

	private String userId;
	private String planId;

	/**
	 * 
	 */
	public UserPlanRequest() {
		super();
	}

	/**
	 * @param userId
	 * @param planId
	 */
	public UserPlanRequest(String userId, String planId) {
		super();
		this.userId = userId;
		this.planId = planId;
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
