package com.spl.gymmassive.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spl.gymmassive.models.User;
import com.spl.gymmassive.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	public List<User> findAll() {
		return userRepository.findAll();
	}
	
	public List<User> findAllEmployees() {
		return userRepository.findAll().stream()
		.filter(c -> c.getType().equals("Employee"))
		.collect(Collectors.toList());
		
	}

	public User findById(String userId) {
		Optional<User> user = userRepository.findById(userId);
		return user.isPresent() ? user.get() : null;
	}

	public User createUser(User user) {
		return userRepository.save(user);
	}

	public User editUser(User user) {
		Optional<User> editedOptionalUser = userRepository.findById(user.getId());

		if (editedOptionalUser.isPresent()) {
			User editedUser = editedOptionalUser.get();
			editedUser.cloneUser(user.getId(), user.getName(), user.getLastName(), user.getBirthday(),
					user.getDocumentType(), user.getDocumentNumber(), user.getPhone(), user.getEmail(),
					user.getPassword(), user.getType());
			return userRepository.save(editedUser);
		}

		return null;
	}

	public boolean deleteUser(String userId) {
		userRepository.deleteById(userId);
		return userRepository.findById(userId) == null;
	}
}
