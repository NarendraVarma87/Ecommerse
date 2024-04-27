package com.ecom.varma;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EcommerceLoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceLoginApplication.class, args);
	}

}
