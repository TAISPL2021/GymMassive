package com.spl.gymmassive.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Class")
public class Class {

	@Id
	private String id;
	private String name;
	private Date date;
	private int capacity;

	/**
	 * @param id
	 * @param name
	 * @param date
	 * @param capacity
	 */
	public Class(String id, String name, Date date, int capacity) {
		super();
		this.id = id;
		this.name = name;
		this.date = date;
		this.capacity = capacity;
	}

	/**
	 * 
	 */
	public Class() {
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
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the date
	 */
	public Date getDate() {
		return date;
	}

	/**
	 * @param date the date to set
	 */
	public void setDate(Date date) {
		this.date = date;
	}

	/**
	 * @return the capacity
	 */
	public int getCapacity() {
		return capacity;
	}

	/**
	 * @param capacity the capacity to set
	 */
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

}
