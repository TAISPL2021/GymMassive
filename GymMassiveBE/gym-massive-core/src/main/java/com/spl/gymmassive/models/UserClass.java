package com.spl.gymmassive.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "UserClass")
public class UserClass {
	@Id
	private String id;
	@DBRef
	private Class clas;
	private String userId;

	/**
	 * 
	 */
	public UserClass() {
		super();
	}

	/**
	 * @param id
	 * @param userId
	 */
	public UserClass(String id, String userId) {
		super();
		this.id = id;
		this.userId = userId;
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
	 * @return the clas
	 */
	public Class getClas() {
		return clas;
	}

	/**
	 * @param clas the clas to set
	 */
	public void setClas(Class clas) {
		this.clas = clas;
	}


}
