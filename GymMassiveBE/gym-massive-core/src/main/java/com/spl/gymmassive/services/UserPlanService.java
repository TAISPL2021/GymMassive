package com.spl.gymmassive.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spl.gymmassive.aspects.EmailAnotation;
import com.spl.gymmassive.models.Plan;
import com.spl.gymmassive.models.UserPlan;
import com.spl.gymmassive.models.request.UserPlanRequest;
import com.spl.gymmassive.repositories.PlanRepository;
import com.spl.gymmassive.repositories.UserPlanRepository;

@Service
public class UserPlanService {

	@Autowired
	private UserPlanRepository userPlanRepository;

	@Autowired
	private PlanRepository planRepository;

	@EmailAnotation(operation = "SuscriptionPlan", emailTo = "[0].userEmail")
	public UserPlan asociateUserPlan(UserPlanRequest userPlanRequest) {
		Plan plan = planRepository.findById(userPlanRequest.getPlanId()).get();
		UserPlan userPlan = new UserPlan();
		if (userPlanRepository.findByUserId(userPlanRequest.getUserId()).isPresent()) {
			userPlan = userPlanRepository.findByUserId(userPlanRequest.getUserId()).get();
			userPlan.setPlan(plan);
			userPlan.setInitialDate(new Date());
			return userPlanRepository.save(userPlan);
		} else {
			userPlan.setUserId(userPlanRequest.getUserId());
			userPlan.setPlan(plan);
			userPlan.setInitialDate(new Date());
			return userPlanRepository.save(userPlan);
		}
	}

	public boolean removeUserPlan(String userId) {
		UserPlan plan = userPlanRepository.findByUserId(userId).get();
		userPlanRepository.delete(plan);
		return !userPlanRepository.findByUserId(userId).isPresent();
	}

	public UserPlan findUserPlan(String userId) {
		return userPlanRepository.findByUserId(userId).isPresent() ? userPlanRepository.findByUserId(userId).get() : null;
	}

}
