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

import com.spl.gymmassive.models.Plan;
import com.spl.gymmassive.models.UserPlan;
import com.spl.gymmassive.models.request.UserPlanRequest;
import com.spl.gymmassive.services.PlanService;
import com.spl.gymmassive.services.UserPlanService;

@RestController
public class PlanController {

	@Autowired
	private PlanService planService;

	@Autowired
	private UserPlanService userPlanService;

	@RequestMapping(value = "/plans", method = RequestMethod.GET)
	public List<Plan> getPlans() {
		return planService.findAll();
	}

	@RequestMapping(value = "/suscribe", method = RequestMethod.POST)
	public ResponseEntity<UserPlan> asociateUserPlan(@RequestBody UserPlanRequest request) {

		UserPlan newPlan = userPlanService.asociateUserPlan(request);
		if (newPlan != null) {
			return ResponseEntity.status(HttpStatus.OK).body(newPlan);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);

		}
	}

	@RequestMapping(value = "/suscribe/{id}", method = RequestMethod.GET)
	public UserPlan findUserPlan(@PathVariable String id) {
		return userPlanService.findUserPlan(id);
	}

	@RequestMapping(value = "/suscribe/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteSuscription(@PathVariable String id) {
		boolean deleted = userPlanService.removeUserPlan(id);
		if (deleted) {
			return ResponseEntity.status(HttpStatus.OK).body(deleted);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(deleted);
		}
	}
}