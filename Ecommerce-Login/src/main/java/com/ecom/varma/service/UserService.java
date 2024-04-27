package com.ecom.varma.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.varma.model.UserTable;
import com.ecom.varma.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;

	public List<UserTable> getAllUsers() {
		return userRepository.findAll();
	}

	public UserTable addUser(UserTable userTable) {
		return userRepository.save(userTable);
	}

	public UserTable getUserByName(String userName) {
		return userRepository.getByUserName(userName);
	}
	
}
