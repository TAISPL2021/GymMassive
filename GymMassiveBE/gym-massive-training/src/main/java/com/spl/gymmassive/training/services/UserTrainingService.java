package com.spl.gymmassive.training.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spl.gymmassive.training.models.Training;
import com.spl.gymmassive.training.models.TrainingModified;
import com.spl.gymmassive.training.models.TrainingModifiedRequest;
import com.spl.gymmassive.training.models.UserTrainingRequest;
import com.spl.gymmassive.training.models.UserTraning;
import com.spl.gymmassive.training.repositories.TrainingRepository;
import com.spl.gymmassive.training.repositories.UserTrainingRepository;

@Service
public class UserTrainingService {

	@Autowired
	private UserTrainingRepository userTrainingRepository;

	@Autowired
	private TrainingRepository trainingRepository;

	public ArrayList<TrainingModified> findByUserId(String userId) {
		Optional<UserTraning> routine = userTrainingRepository.findByUserId(userId);
		return routine.isPresent() ? routine.get().getTraining() : null;
	}

	public UserTraning createModifyUserTraining(UserTrainingRequest userTrainingRequest) {
		Optional<UserTraning> exitingTraining = userTrainingRepository.findByUserId(userTrainingRequest.getUserId());
		UserTraning userTraning = exitingTraining.isPresent() ? exitingTraining.get() : new UserTraning();

		userTraning.setUserId(userTrainingRequest.getUserId());
		userTraning.setTraining(new ArrayList<>());

		for (TrainingModifiedRequest tmr : userTrainingRequest.getTraining()) {
			Training t = trainingRepository.findById(tmr.getTraining()).get();
			TrainingModified tm = new TrainingModified(t, tmr.getDay(), tmr.getSets(), tmr.getReps());
			userTraning.getTraining().add(tm);
		}

		return userTrainingRepository.save(userTraning);
	}

}
