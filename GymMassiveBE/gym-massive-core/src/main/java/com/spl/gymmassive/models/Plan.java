package com.spl.gymmassive.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Plan")
public abstract class Plan {
	@Id
	private String id;
	private int days;
	private String name;
	private double price;

	public Plan() {
	}

	/**
	 * @param id
	 * @param days
	 * @param name
	 * @param price
	 */
	public Plan(String id, int days, String name, double price) {
		super();
		this.days = days;
		this.name = name;
		this.price = price;
	}

	public abstract Plan clone();

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
	 * @return the days
	 */
	public int getDays() {
		return days;
	}

	/**
	 * @param days the days to set
	 */
	public void setDays(int days) {
		this.days = days;
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
	 * @return the price
	 */
	public double getPrice() {
		return price;
	}

	/**
	 * @param price the price to set
	 */
	public void setPrice(double price) {
		this.price = price;
	}

}
