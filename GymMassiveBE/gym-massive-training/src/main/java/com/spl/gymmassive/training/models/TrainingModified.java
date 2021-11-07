package com.spl.gymmassive.training.models;

import org.springframework.data.mongodb.core.mapping.DBRef;

public class TrainingModified {
	@DBRef
	private Training training;
	private String day;
	private Long sets;
	private Long reps;

	/**
	 * @param training
	 * @param day
	 * @param sets
	 * @param reps
	 */
	public TrainingModified(Training training, String day, Long sets, Long reps) {
		super();
		this.training = training;
		this.day = day;
		this.sets = sets;
		this.reps = reps;
	}

	/**
	 * 
	 */
	public TrainingModified() {
		super();
	}

	/**
	 * @return the training
	 */
	public Training getTraining() {
		return training;
	}

	/**
	 * @param training the training to set
	 */
	public void setTraining(Training training) {
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
