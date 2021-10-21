/**
 * 
 */
package com.spl.gymmassive.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.spl.gymmassive.models.User;
import com.spl.gymmassive.services.UserService;

import java.util.List;

/**
 * @author joaquin.suarez
 *
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/user")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping(value = "/create")
	public ResponseEntity<User> createUser(@RequestBody User newUser) {
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
	public ResponseEntity<List<User>> findEmployees(){
		return ResponseEntity.ok(userService.findAllEmployees());
	}

}
