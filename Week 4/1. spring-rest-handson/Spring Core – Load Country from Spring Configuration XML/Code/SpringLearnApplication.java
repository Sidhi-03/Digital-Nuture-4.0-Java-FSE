package com.cognizant.demo;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;

import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class SpringLearnApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(SpringLearnApplication.class, args);
		displayDate();  // Call the method after starting Spring Boot
	}

	public static void displayDate() throws Exception {
		ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
		SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);

		Date parsedDate = format.parse("31/12/2018");
		System.out.println("Parsed Date: " + parsedDate);
	}
}

