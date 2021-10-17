package com.spl.gymmassive.services;

import java.util.List;
import java.util.Optional;

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

	public Routine findById(String routineId) {
		Optional<Routine> routine = routineRepository.findById(routineId);
		return routine.isPresent() ? routine.get() : null;
	}

	public Routine createRoutine(Routine routine) {
		return routineRepository.save(routine);
	}

	public Routine editRoutine(Routine routine) {
		Optional<Routine> editedOptionalRoutine = routineRepository.findById(routine.getId());

		if (editedOptionalRoutine.isPresent()) {
			Routine editedRoutine = editedOptionalRoutine.get();
			editedRoutine.setExercise(routine.getExercise());
			editedRoutine.setGroup(routine.getGroup());
			editedRoutine.setImage(routine.getImage());
			editedRoutine.setReps(routine.getReps());
			editedRoutine.setSets(routine.getSets());
			return routineRepository.save(editedRoutine);
		}

		return null;
	}

	public boolean deleteRoutine(String routineId) {
		routineRepository.deleteById(routineId);
		return routineRepository.findById(routineId) == null;
	}
}
