package com.spl.gymmassive.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.spl.gymmassive.models.Plan;
import com.spl.gymmassive.models.PlanProtype;
import com.spl.gymmassive.repositories.PlanRepository;

@Service
public class PlanService {

	@Autowired
	PlanRepository planRepository;

	@Autowired
	private Environment env;

	public void initializePlans() {
		PlanProtype planProtype = new PlanProtype();
		planRepository.deleteAll();
		if (env.getProperty("MonthPlan").equalsIgnoreCase("true")) {
			planRepository.save(planProtype.prototype("Month"));
		}
		if (env.getProperty("YearPlan").equalsIgnoreCase("true")) {
			planRepository.save(planProtype.prototype("Year"));
		}
		if (env.getProperty("QuarterPlan").equalsIgnoreCase("true")) {
			planRepository.save(planProtype.prototype("Quarter"));
		}
	}

	public List<Plan> findAll() {
		return planRepository.findAll();
	}
}