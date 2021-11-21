package com.spl.gymmassive.strategy;

import com.spl.gymmassive.models.Class;
import com.spl.gymmassive.repositories.ClassRepository;

public class ManageBooking implements BookingStrategy {

	private ClassRepository classRepository;

	public ManageBooking(ClassRepository classRepository) {
		this.classRepository = classRepository;
	}

	@Override
	public boolean doOperation(String userEmail, String userId, Class clas, String action) {
		switch (action) {
		case "Create":
			return createUpdateClass(clas);
		case "Update":
			return createUpdateClass(clas);
		case "Delete":
			return removeClass(clas);
		}
		return false;
	}

	private boolean createUpdateClass(Class clas) {
		classRepository.save(clas);
		return classRepository.findById(clas.getId()).isPresent();
	}

	private boolean removeClass(Class clas) {
		classRepository.delete(clas);
		return !classRepository.findById(clas.getId()).isPresent();
	}

}
