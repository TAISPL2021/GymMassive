package com.spl.gymmassive.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spl.gymmassive.models.Routine;
import com.spl.gymmassive.services.RoutineService;

@RestController
public class RoutineController {
	@Autowired
	private RoutineService routineService;

	@RequestMapping(value = "/routine", method = RequestMethod.GET)
	public List<Routine> getRoutines() {
		return routineService.findAll();
	}

}
