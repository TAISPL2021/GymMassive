package com.spl.gymmassive.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spl.gymmassive.models.User;


/**
 * @author brayan.guerrero
 *
 */
public interface UserRepository extends MongoRepository<User, String> {

	Optional<User> findByEmail(String email);
}