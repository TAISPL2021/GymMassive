package com.spl.gymmassive.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClassRepository extends MongoRepository<com.spl.gymmassive.models.Class, String> {

}
