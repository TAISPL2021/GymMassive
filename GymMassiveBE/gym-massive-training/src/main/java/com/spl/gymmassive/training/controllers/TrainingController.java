package com.spl.gymmassive.training.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spl.gymmassive.training.models.Training;
import com.spl.gymmassive.training.services.TrainingService;

@RestController
public class TrainingController {

	@Autowired
	private TrainingService trainingService;

	@RequestMapping(value = "/training", method = RequestMethod.POST)
	public ResponseEntity<Training> createRoutine(@RequestBody Training request) {

		Training newRoutine = trainingService.createRoutine(request);
		if (newRoutine != null) {
			return ResponseEntity.status(HttpStatus.OK).body(newRoutine);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);

		}
	}

	@RequestMapping(value = "/training/{id}", method = RequestMethod.GET)
	public ResponseEntity<Training> findRoutineById(@PathVariable String id) {
		return ResponseEntity.status(HttpStatus.OK).body(trainingService.findById(id));
	}

	@RequestMapping(value = "/training", method = RequestMethod.PUT)
	public ResponseEntity<Training> editRoutine(@RequestBody Training routine) {
		Training editedRoutine = trainingService.editRoutine(routine);
		if (editedRoutine != null) {
			return ResponseEntity.status(HttpStatus.OK).body(trainingService.editRoutine(routine));
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(trainingService.editRoutine(routine));
		}
	}

	@RequestMapping(value = "/training", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteRoutine(@RequestBody String id) {
		boolean deleted = trainingService.deleteRoutine(id);
		if (deleted) {
			return ResponseEntity.status(HttpStatus.OK).body(trainingService.deleteRoutine(id));
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(trainingService.deleteRoutine(id));
		}
	}
}
