package com.spl.gymmassive.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spl.gymmassive.models.Routine;

public interface RoutineRepository extends MongoRepository<Routine, String> {

}
