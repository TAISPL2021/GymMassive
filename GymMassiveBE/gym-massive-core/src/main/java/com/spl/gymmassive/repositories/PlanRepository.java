package com.spl.gymmassive.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spl.gymmassive.models.Plan;

public interface PlanRepository extends MongoRepository<Plan, String> {

}
