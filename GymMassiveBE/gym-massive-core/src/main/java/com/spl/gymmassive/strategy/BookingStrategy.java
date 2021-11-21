package com.spl.gymmassive.strategy;

import com.spl.gymmassive.models.Class;

public interface BookingStrategy {

	public boolean doOperation(String userEmail,String userId, Class clas, String action);
}
