package com.spl.gymmassive.training.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spl.gymmassive.training.models.Training;

public interface TrainingRepository extends MongoRepository<Training, String> {

}
