/**
 * 
 */
package com.spl.gymmassive.models;

/**
 * @author BrayanGuerrero
 *
 */
public class UserBuilder {

	private String id;
	private String name;
	private String lastName;
	private String birthday;
	private String documentType;
	private String documentNumber;
	private String phone;
	private String email;
	private String password;
	private String type;

	public UserBuilder setId(String id) {
		this.id = id;
		return this;
	}

	public UserBuilder setName(String name) {
		this.name = name;
		return this;
	}

	public UserBuilder setLastName(String lastName) {
		this.lastName = lastName;
		return this;
	}

	public UserBuilder setBirthday(String birthday) {
		this.birthday = birthday;
		return this;
	}

	public UserBuilder setDocumentType(String documentType) {
		this.documentType = documentType;
		return this;
	}

	public UserBuilder setDocumentNumber(String documentNumber) {
		this.documentNumber = documentNumber;
		return this;
	}

	public UserBuilder setPhone(String phone) {
		this.phone = phone;
		return this;
	}

	public UserBuilder setEmail(String email) {
		this.email = email;
		return this;
	}

	public UserBuilder setPassword(String password) {
		this.password = password;
		return this;
	}

	public UserBuilder setType(String type) {
		this.type = type;
		return this;
	}

	public User build() {
		return new User(id, name, lastName, birthday, documentType, documentNumber, phone, email, password, type);
	}

}
