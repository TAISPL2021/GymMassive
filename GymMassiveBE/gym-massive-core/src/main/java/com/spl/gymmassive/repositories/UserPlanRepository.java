package com.spl.gymmassive.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.spl.gymmassive.models.UserPlan;

public interface UserPlanRepository extends MongoRepository<UserPlan, String> {
	@Query("{userId :?0}")
	Optional<UserPlan> findByUserId(String userId);
}
