package com.spl.gymmassive.models;

import java.util.HashMap;

public class PlanProtype {
	private HashMap<String, Plan> prototypes = new HashMap<>();

	public PlanProtype() {
		MonthPlan monthPlan = new MonthPlan();
		YearPlan yearPlan = new YearPlan();
		QuarterPlan quarterPlan = new QuarterPlan();

		prototypes.put("Month", monthPlan);
		prototypes.put("Year", yearPlan);
		prototypes.put("Quarter", quarterPlan);
	}

	public Plan prototype(String type) {
		return prototypes.get(type).clone();
	}
}
