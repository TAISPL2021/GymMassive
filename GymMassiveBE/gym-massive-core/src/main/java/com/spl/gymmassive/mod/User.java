/**
 * 
 */
package com.spl.gymmassive.mod;

//import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author brayan.guerrero
 *
 */
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "User")
public class User {

//	@Id
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

}
