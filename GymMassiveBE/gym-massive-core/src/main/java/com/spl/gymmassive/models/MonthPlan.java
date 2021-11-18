package com.spl.gymmassive.models;

public class MonthPlan extends Plan {

	public MonthPlan() {
		this.setDays(30);
		this.setName("Mensualidad");
		this.setPrice(50000);
	}

	@Override
	public Plan clone() {
		return new MonthPlan();
	}

}
