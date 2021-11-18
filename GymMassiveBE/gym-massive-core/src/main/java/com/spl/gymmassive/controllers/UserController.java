/**
 * 
 */
package com.spl.gymmassive.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spl.gymmassive.models.User;
import com.spl.gymmassive.models.request.UserRequest;
import com.spl.gymmassive.services.UserService;

/**
 * @author joaquin.suarez
 *
 */
@RestController
@RequestMapping(value = "/user")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping(value = "/create")
	public ResponseEntity<User> createUser(@RequestBody UserRequest newUser) {
		return ResponseEntity.ok(userService.createUser(newUser));
	}

	@PutMapping(value = "/edit")
	public ResponseEntity<User> editUser(@RequestBody User existingUser) {
		return ResponseEntity.ok(userService.editUser(existingUser));
	}

	@DeleteMapping(value = "/delete")
	public ResponseEntity<Boolean> logout(@RequestParam String userId) {
		userService.deleteUser(userId);
		return ResponseEntity.ok(userService.deleteUser(userId));
	}

	@GetMapping(value = "/findEmployees")
	public ResponseEntity<List<User>> findEmployees() {
		return ResponseEntity.ok(userService.findAllEmployees());
	}

	@GetMapping(value = "/findClients")
	public ResponseEntity<List<User>> findClients() {
		return ResponseEntity.ok(userService.findAllClients());
	}

}
