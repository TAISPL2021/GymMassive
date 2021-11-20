package com.spl.gymmassive.strategy;

public class BookingContext {

	private BookingStrategy bookingStrategy;

	/**
	 * @param bookingStrategy
	 */
	public BookingContext(BookingStrategy bookingStrategy) {
		this.bookingStrategy = bookingStrategy;
	}

	public boolean executeStrategy(String userId, com.spl.gymmassive.models.Class clas, String action) {
		return bookingStrategy.doOperation(userId, clas, action);
	}
}
