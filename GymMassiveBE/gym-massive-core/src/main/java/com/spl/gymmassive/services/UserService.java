package com.spl.gymmassive.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spl.gymmassive.aspects.EmailAnotation;
import com.spl.gymmassive.models.User;
import com.spl.gymmassive.models.UserBuilder;
import com.spl.gymmassive.models.request.UserRequest;
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
				.filter(c -> c.getType().equals("Entrenador") || c.getType().equals("Administrador"))
				.collect(Collectors.toList());

	}

	public List<User> findAllClients() {
		return userRepository.findAll().stream().filter(c -> c.getType().equals("Cliente"))
				.collect(Collectors.toList());

	}

	public User findById(String userId) {
		Optional<User> user = userRepository.findById(userId);
		return user.isPresent() ? user.get() : null;
	}

	@EmailAnotation(operation = "Registro", emailTo = "[0].email")
	public User createUser(UserRequest userRequest) {
		UserBuilder userBuilder = new UserBuilder();
		User user = buildUser(userRequest, userBuilder);
		return userRepository.save(user);
	}

	private User buildUser(UserRequest userRequest, UserBuilder userBuilder) {
		return userBuilder
				.setId(userRequest.getId())
				.setName(userRequest.getName())
				.setLastName(userRequest.getLastName())
				.setBirthday(userRequest.getBirthday())
				.setDocumentType(userRequest.getDocumentType())
				.setDocumentNumber(userRequest.getDocumentNumber())
				.setPhone(userRequest.getPhone())
				.setEmail(userRequest.getEmail())
				.setPassword(userRequest.getPassword())
				.setType(userRequest.getType())
				.build();
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
