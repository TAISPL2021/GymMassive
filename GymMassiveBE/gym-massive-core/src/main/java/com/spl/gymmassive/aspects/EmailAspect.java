package com.spl.gymmassive.aspects;

import java.lang.reflect.Method;

import javax.mail.MessagingException;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.stereotype.Component;

import com.spl.gymmassive.models.MailSenderModel;
import com.spl.gymmassive.services.MailSenderService;

@Aspect
@Component
public class EmailAspect {

	@Autowired
	private MailSenderService mailSenderService;

	@Autowired
	private Environment env;

	@After(value = "@annotation(EmailAnotation)")
	public void logExecutionTime(JoinPoint joinPoint) {
		if (env.getProperty("NotifyEmail").equalsIgnoreCase("true")) {
			EmailAnotation emailAnotation = getOperation(joinPoint);
			String emailOperation = emailAnotation.operation();
			String toEmail = getEmail(joinPoint, emailAnotation);
			MailSenderModel model = getModelByOperation(emailOperation, toEmail);
			try {
				mailSenderService.sendSimpleMessage(model);
			} catch (MessagingException e) {
				e.printStackTrace();
			}
		}
	}

	private MailSenderModel getModelByOperation(String operation, String toEmail) {

		switch (operation) {
		case "Registro":
			return registerEmail(toEmail);
		default:
			return null;
		}
	}

	private MailSenderModel registerEmail(String toEmail) {
		return new MailSenderModel(toEmail, "Registro Existoso!",
				"Su cuenta de GymMassive ha sido creada. Puede iniciar sesion usando las credenciales registradas.");
	}

	private String getEmail(JoinPoint joinPoint, EmailAnotation emailAnotation) {
		Object[] args = joinPoint.getArgs();
		ExpressionParser elParser = new SpelExpressionParser();
		Expression expression = elParser.parseExpression(emailAnotation.emailTo());
		return (String) expression.getValue(args);
	}

	private EmailAnotation getOperation(JoinPoint joinPoint) {
		MethodSignature signature = (MethodSignature) joinPoint.getSignature();
		Method method = signature.getMethod();
		EmailAnotation emailOperation = method.getAnnotation(EmailAnotation.class);
		return emailOperation;
	}

}
