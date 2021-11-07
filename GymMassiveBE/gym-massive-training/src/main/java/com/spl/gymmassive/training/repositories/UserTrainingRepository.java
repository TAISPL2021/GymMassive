package com.spl.gymmassive.training.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.spl.gymmassive.training.models.UserTraning;

public interface UserTrainingRepository extends MongoRepository<UserTraning, String> {

	@Query("{userId :?0}")
	Optional<UserTraning> findByUserId(String userId);

}
