package com.spl.gymmassive.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spl.gymmassive.models.Routine;
import com.spl.gymmassive.repositories.RoutineRepository;

@Service
public class RoutineService {
	@Autowired
	private RoutineRepository routineRepository;

	public List<Routine> findAll() {
		return routineRepository.findAll();
	}

}
