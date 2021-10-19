/**
 * 
 */
package com.spl.gymmassive.exception;

//import javax.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.spl.gymmassive.models.response.ErrorResponse;

/**
 * @author brayan.guerrero
 *
 */
@RestControllerAdvice
public class GymMassiveExceptionHandler {

	@ExceptionHandler(value = { UserNotFoundException.class })
	public ResponseEntity<ErrorResponse> handleException(UserNotFoundException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body(new ErrorResponse(HttpStatus.NOT_FOUND.value(), e.getMessage()));
	}

	@ExceptionHandler(value = { AuthenticationException.class })
	public ResponseEntity<ErrorResponse> handleException(AuthenticationException e) {
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
				.body(new ErrorResponse(HttpStatus.UNAUTHORIZED.value(), e.getMessage()));
	}

	@ExceptionHandler(value = { TokenHeaderException.class })
	public ResponseEntity<ErrorResponse> handleException(TokenHeaderException e) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(new ErrorResponse(HttpStatus.BAD_REQUEST.value(), e.getMessage()));
	}

}
