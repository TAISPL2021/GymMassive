package com.spl.gymmassive.training.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spl.gymmassive.training.models.TrainingModified;
import com.spl.gymmassive.training.models.UserTrainingRequest;
import com.spl.gymmassive.training.models.UserTraning;
import com.spl.gymmassive.training.services.UserTrainingService;

@RestController
public class UserTrainingController {

	@Autowired
	private UserTrainingService userTrainingService;

	@RequestMapping(value = "/userTraining/{id}", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<TrainingModified>> getRoutineForUser(@PathVariable String id) {
		return ResponseEntity.status(HttpStatus.OK).body(userTrainingService.findByUserId(id));
	}

	@RequestMapping(value = "/userTraining", method = RequestMethod.POST)
	public ResponseEntity<UserTraning> createUpdateRoutineForUser(@RequestBody UserTrainingRequest request) {

		UserTraning newRoutine = userTrainingService.createModifyUserTraining(request);
		if (newRoutine != null) {
			return ResponseEntity.status(HttpStatus.OK).body(newRoutine);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);

		}
	}
}
