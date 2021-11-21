package com.spl.gymmassive.strategy;

import java.util.List;

import com.spl.gymmassive.aspects.EmailAnotation;
import com.spl.gymmassive.models.Class;
import com.spl.gymmassive.models.UserClass;
import com.spl.gymmassive.repositories.ClassRepository;
import com.spl.gymmassive.repositories.UserClassRepository;

public class BookClass implements BookingStrategy {

	private UserClassRepository userClass;

	private ClassRepository classRepository;

	public BookClass(UserClassRepository userClass, ClassRepository classRepository) {
		this.classRepository = classRepository;
		this.userClass = userClass;
	}

	@Override
	public boolean doOperation(String userEmail, String userId, Class clas, String action) {
		switch (action) {
		case "AsociateUser":
			return asociateUserClass(userEmail, userId, clas);
		case "DesasociateUser":
			return removeUserClass(userEmail, userId, clas.getId());
		}
		return false;
	}

	@EmailAnotation(operation = "AsociateUser", emailTo = "[0]")
	private boolean asociateUserClass(String userEmail, String userId, Class clas) {
		UserClass class1 = new UserClass();
		class1.setClas(clas);
		class1.setUserId(userId);
		UserClass uc = userClass.save(class1);
		Class c = classRepository.findById(clas.getId()).get();
		c.setCapacity(c.getCapacity() - 1);
		classRepository.save(c);
		return userClass.findById(uc.getId()).isPresent();
	}

	@EmailAnotation(operation = "DesasociateUser", emailTo = "[0]")
	private boolean removeUserClass(String userEmail, String userId, String classId) {
		List<UserClass> classArr = userClass.findAllByUserId(userId).get();
		UserClass class1 = null;
		for (UserClass uc : classArr) {
			if (uc.getClas().getId().equals(classId)) {
				class1 = uc;
			}
		}
		if (class1 != null) {
			Class c = classRepository.findById(class1.getClas().getId()).get();
			c.setCapacity(c.getCapacity() + 1);
			classRepository.save(c);
			userClass.delete(class1);
			return !userClass.findById(class1.getId()).isPresent();
		}
		return false;
	}

}
