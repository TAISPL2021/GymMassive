package com.spl.gymmassive.models;

public class QuarterPlan extends Plan {

	public QuarterPlan() {
		this.setDays(120);
		this.setName("Cuatrimestre");
		this.setPrice(180000);
	}

	@Override
	public Plan clone() {
		return new QuarterPlan();
	}

}