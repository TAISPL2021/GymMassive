package com.spl.gymmassive.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Routines")
public class Routine {

	@Id
	private String id;
	private String exercise;
	private Long sets;
	private Long reps;
	private String group;
	private String image;

	public Routine() {
		super();
	}

	public Routine(String id, String exercise, Long sets, Long reps, String group, String image) {
		super();
		this.id = id;
		this.exercise = exercise;
		this.sets = sets;
		this.reps = reps;
		this.group = group;
		this.image = image;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getExercise() {
		return exercise;
	}

	public void setExercise(String exercise) {
		this.exercise = exercise;
	}

	public Long getSets() {
		return sets;
	}

	public void setSets(Long sets) {
		this.sets = sets;
	}

	public Long getReps() {
		return reps;
	}

	public void setReps(Long reps) {
		this.reps = reps;
	}

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

}
