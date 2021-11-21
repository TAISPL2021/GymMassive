package com.spl.gymmassive.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spl.gymmassive.models.Class;
import com.spl.gymmassive.models.UserClass;
import com.spl.gymmassive.repositories.ClassRepository;
import com.spl.gymmassive.repositories.UserClassRepository;

@Service
public class BookingService {
	@Autowired
	private ClassRepository classRepository;
	
	@Autowired
	private UserClassRepository userClass;
	
	public List<Class> getAllClasses() {
		return classRepository.findAll();
	}

	public Class getClassById(String id) {
		return classRepository.findById(id).get();
	}
	
	public List<UserClass> getAllClassesByUser(String userId) {
		return userClass.findAllByUserId(userId).get();
	}
}
