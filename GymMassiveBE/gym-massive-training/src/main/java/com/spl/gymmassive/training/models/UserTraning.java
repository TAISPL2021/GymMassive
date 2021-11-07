package com.spl.gymmassive.training.models;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "UserRoutines")
public class UserTraning {

	@Id
	private String id;
	private String userId;
	private ArrayList<TrainingModified> training;

	/**
	 * @param id
	 * @param userId
	 * @param training
	 */
	public UserTraning(String id, String userId, ArrayList<TrainingModified> training) {
		super();
		this.id = id;
		this.userId = userId;
		this.training = training;
	}

	/**
	 * 
	 */
	public UserTraning() {
		super();
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
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
	public ArrayList<TrainingModified> getTraining() {
		return training;
	}

	/**
	 * @param training the training to set
	 */
	public void setTraining(ArrayList<TrainingModified> training) {
		this.training = training;
	}

}
