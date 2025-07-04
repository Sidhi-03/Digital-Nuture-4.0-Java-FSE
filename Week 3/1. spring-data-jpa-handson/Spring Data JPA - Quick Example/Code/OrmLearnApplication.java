package com.cognizant.orm_learn;

import java.util.List;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;
import com.cognizant.orm_learn.service.CountryService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

	@Autowired
	private CountryRepository countryRepository;

	public static void main(String[] args) {
		SpringApplication.run(OrmLearnApplication.class, args);
		System.out.println("Inside main");
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Start");

		// Add this to save sample countries
		Country country = new Country();
		country.setCode("IN");
		country.setName("India");
		countryRepository.save(country);

		// Fetch and print all countries
		List<Country> countries = countryRepository.findAll();
		for (Country c : countries) {
			System.out.println("Country: " + c.getCode() + " - " + c.getName());
		}

		System.out.println("End");
	}
}
