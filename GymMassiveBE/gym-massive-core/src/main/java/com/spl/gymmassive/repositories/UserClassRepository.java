package com.spl.gymmassive.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.spl.gymmassive.models.UserClass;

public interface UserClassRepository extends MongoRepository<UserClass, String> {
	@Query("{userId :?0}")
	Optional<UserClass> findByUserId(String userId);
	
	@Query("{userId :?0}")
	Optional<UserClass> findByUserIdAndClassId(String userId,String classId);
	
	@Query("{userId :?0}")
	Optional<List<UserClass>> findAllByUserId(String userId);
}
