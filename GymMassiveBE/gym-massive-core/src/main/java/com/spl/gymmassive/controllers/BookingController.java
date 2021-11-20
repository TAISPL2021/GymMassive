package com.spl.gymmassive.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spl.gymmassive.models.Class;
import com.spl.gymmassive.models.UserClass;
import com.spl.gymmassive.models.request.BookingRequest;
import com.spl.gymmassive.repositories.ClassRepository;
import com.spl.gymmassive.repositories.UserClassRepository;
import com.spl.gymmassive.services.BookingService;
import com.spl.gymmassive.strategy.BookClass;
import com.spl.gymmassive.strategy.BookingContext;
import com.spl.gymmassive.strategy.ManageBooking;

@RestController
public class BookingController {

	@Autowired
	private BookingService bookingService;

	@Autowired
	private ClassRepository classRepository;

	@Autowired
	private UserClassRepository userClass;

	@Autowired
	private Environment env;

	@RequestMapping(value = "/class", method = RequestMethod.GET)
	public List<Class> getClasses() {
		return bookingService.getAllClasses();
	}

	@RequestMapping(value = "/class/{id}", method = RequestMethod.GET)
	public List<UserClass> getUserClasses(@PathVariable String id) {
		return bookingService.getAllClassesByUser(id);
	}

	@RequestMapping(value = "/class", method = RequestMethod.POST)
	public ResponseEntity<Boolean> manageBookings(@RequestBody BookingRequest request) {

		BookingContext bookingContext = null;

		if (env.getProperty("BookClass").equalsIgnoreCase("true")) {
			bookingContext = new BookingContext(new BookClass(userClass, classRepository));
		} else if (env.getProperty("ManageBooking").equalsIgnoreCase("true")) {
			bookingContext = new BookingContext(new ManageBooking(classRepository));
		}

		if (bookingContext == null) {
			return ResponseEntity.status(HttpStatus.OK).body(false);
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(bookingContext.executeStrategy(request.getUserId(), request.getClas(), request.getAction()));
	}

}
