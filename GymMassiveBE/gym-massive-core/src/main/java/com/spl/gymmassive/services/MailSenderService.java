package com.spl.gymmassive.services;

import java.nio.charset.StandardCharsets;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring4.SpringTemplateEngine;

import com.spl.gymmassive.models.MailSenderModel;

@Component
public class MailSenderService {

	@Autowired
	public JavaMailSender emailSender;

	@Autowired
	private SpringTemplateEngine springTemplateEngine;

	public void sendSimpleMessage(MailSenderModel mailSenderModel) throws MessagingException {
		MimeMessage message = emailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,StandardCharsets.UTF_8.name());
		
		Context context = new Context();
		context.setVariable("username", mailSenderModel.getTo());
		context.setVariable("message", mailSenderModel.getMessage());

		String html = springTemplateEngine.process("email-template", context);

		helper.setTo(mailSenderModel.getTo());
		helper.setText(html, true);
		helper.setSubject(mailSenderModel.getSubject());
		helper.setFrom("dspl2019coms@gmail.com");
		emailSender.send(message);
	}

}
