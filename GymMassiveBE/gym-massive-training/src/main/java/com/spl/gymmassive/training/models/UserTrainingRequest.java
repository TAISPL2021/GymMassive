package com.spl.gymmassive.training.models;

import java.util.ArrayList;

public class UserTrainingRequest {

	private String userId;
	private ArrayList<TrainingModifiedRequest> training;

	/**
	 * @param userId
	 * @param training
	 */
	public UserTrainingRequest(String userId, ArrayList<TrainingModifiedRequest> training) {
		super();
		this.userId = userId;
		this.training = training;
	}

	/**
	 * 
	 */
	public UserTrainingRequest() {
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
	 * @return the training
	 */
	public ArrayList<TrainingModifiedRequest> getTraining() {
		return training;
	}

	/**
	 * @param training the training to set
	 */
	public void setTraining(ArrayList<TrainingModifiedRequest> training) {
		this.training = training;
	}

}
