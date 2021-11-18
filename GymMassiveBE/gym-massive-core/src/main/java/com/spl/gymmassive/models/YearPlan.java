package com.spl.gymmassive.models;

public class YearPlan extends Plan {

	public YearPlan() {
		this.setDays(365);
		this.setName("Año");
		this.setPrice(550000);
	}

	@Override
	public Plan clone() {
		return new YearPlan();
	}

}