package com.spl.gymmassive.training.models;

public class TrainingModifiedRequest {
	private String training;
	private String day;
	private Long sets;
	private Long reps;

	/**
	 * 
	 */
	public TrainingModifiedRequest() {
		super();
	}

	/**
	 * @param training
	 * @param day
	 * @param sets
	 * @param reps
	 */
	public TrainingModifiedRequest(String training, String day, Long sets, Long reps) {
		super();
		this.training = training;
		this.day = day;
		this.sets = sets;
		this.reps = reps;
	}

	/**
	 * @return the training
	 */
	public String getTraining() {
		return training;
	}

	/**
	 * @param training the training to set
	 */
	public void setTraining(String training) {
		this.training = training;
	}

	/**
	 * @return the day
	 */
	public String getDay() {
		return day;
	}

	/**
	 * @param day the day to set
	 */
	public void setDay(String day) {
		this.day = day;
	}

	/**
	 * @return the sets
	 */
	public Long getSets() {
		return sets;
	}

	/**
	 * @param sets the sets to set
	 */
	public void setSets(Long sets) {
		this.sets = sets;
	}

	/**
	 * @return the reps
	 */
	public Long getReps() {
		return reps;
	}

	/**
	 * @param reps the reps to set
	 */
	public void setReps(Long reps) {
		this.reps = reps;
	}

}
