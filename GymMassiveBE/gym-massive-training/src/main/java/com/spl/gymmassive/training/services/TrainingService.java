package com.spl.gymmassive.training.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spl.gymmassive.training.models.Training;
import com.spl.gymmassive.training.repositories.TrainingRepository;

@Service
public class TrainingService {
	@Autowired
	private TrainingRepository trainingRepository;

	public List<Training> findAll() {
		return trainingRepository.findAll();
	}

	public Training findById(String routineId) {
		Optional<Training> routine = trainingRepository.findById(routineId);
		return routine.isPresent() ? routine.get() : null;
	}

	public Training createRoutine(Training routine) {
		return trainingRepository.save(routine);
	}

	public Training editRoutine(Training routine) {
		Optional<Training> editedOptionalRoutine = trainingRepository.findById(routine.getId());

		if (editedOptionalRoutine.isPresent()) {
			Training editedRoutine = editedOptionalRoutine.get();
			editedRoutine.setExercise(routine.getExercise());
			editedRoutine.setGroup(routine.getGroup());
			editedRoutine.setImage(routine.getImage());
			editedRoutine.setReps(routine.getReps());
			editedRoutine.setSets(routine.getSets());
			return trainingRepository.save(editedRoutine);
		}

		return null;
	}

	public boolean deleteRoutine(String routineId) {
		trainingRepository.deleteById(routineId);
		return trainingRepository.findById(routineId) == null;
	}
}
