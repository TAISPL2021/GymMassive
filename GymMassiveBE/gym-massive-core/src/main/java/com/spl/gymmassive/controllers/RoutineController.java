package com.spl.gymmassive.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spl.gymmassive.models.Routine;
import com.spl.gymmassive.services.RoutineService;

@RestController
public class RoutineController {
	@Autowired
	private RoutineService routineService;

	@RequestMapping(value = "/routine", method = RequestMethod.POST)
	public ResponseEntity<Routine> createRoutine(@RequestBody Routine request) {

		Routine newRoutine = routineService.createRoutine(request);
		if (newRoutine != null) {
			return ResponseEntity.status(HttpStatus.OK).body(newRoutine);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);

		}
	}

	@RequestMapping(value = "/routine", method = RequestMethod.GET)
	public List<Routine> getRoutines() {
		return routineService.findAll();
	}

	@RequestMapping(value = "/routine/{id}", method = RequestMethod.GET)
	public ResponseEntity<Routine> findRoutineById(@PathVariable String id) {
		return ResponseEntity.status(HttpStatus.OK).body(routineService.findById(id));
	}

	@RequestMapping(value = "/routine", method = RequestMethod.PUT)
	public ResponseEntity<Routine> editRoutine(@RequestBody Routine routine) {
		Routine editedRoutine = routineService.editRoutine(routine);
		if (editedRoutine != null) {
			return ResponseEntity.status(HttpStatus.OK).body(routineService.editRoutine(routine));
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(routineService.editRoutine(routine));
		}
	}

	@RequestMapping(value = "/routine", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteRoutine(@RequestBody String id) {
		boolean deleted = routineService.deleteRoutine(id);
		if (deleted) {
			return ResponseEntity.status(HttpStatus.OK).body(routineService.deleteRoutine(id));
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(routineService.deleteRoutine(id));
		}
	}
}
