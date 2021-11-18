package com.spl.gymmassive.models;

import java.time.LocalDate;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "UserPlan")
public class UserPlan {

	@Id
	private String id;
	private String userId;
	private Plan plan;
	private Date initialDate;
	private LocalDate endDate;

	/**
	 * 
	 */
	public UserPlan() {
		super();
	}

	/**
	 * @param id
	 * @param userId
	 * @param plan
	 * @param initialDate
	 * @param endDate
	 */
	public UserPlan(String id, String userId, Plan plan, Date initialDate, LocalDate endDate) {
		super();
		this.id = id;
		this.userId = userId;
		this.plan = plan;
		this.initialDate = initialDate;
		this.endDate = endDate;
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
	 * @return the plan
	 */
	public Plan getPlan() {
		return plan;
	}

	/**
	 * @param plan the plan to set
	 */
	public void setPlan(Plan plan) {
		this.plan = plan;
	}

	/**
	 * @return the initialDate
	 */
	public Date getInitialDate() {
		return initialDate;
	}

	/**
	 * @param initialDate the initialDate to set
	 */
	public void setInitialDate(Date initialDate) {
		this.initialDate = initialDate;
	}

	/**
	 * @return the endDate
	 */
	public LocalDate getEndDate() {
		return endDate;
	}

	/**
	 * @param localDate the endDate to set
	 */
	public void setEndDate(LocalDate localDate) {
		this.endDate = localDate;
	}

}
