package com.ecom.varma.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.varma.model.UserTable;
import com.ecom.varma.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="*")
public class UserController {
	@Autowired
	UserService userService;
	@GetMapping("/get")
	public List<UserTable> getAllUsers(){
		return userService.getAllUsers();
	}
	@PostMapping("/add-user")
	public UserTable addUser(@RequestBody UserTable userTable) {
		return userService.addUser(userTable);
	}
	@CrossOrigin
	@GetMapping("/getby/{userName}")
	public UserTable getUserByName(@PathVariable String userName) {
		return userService.getUserByName(userName);
	}
}
