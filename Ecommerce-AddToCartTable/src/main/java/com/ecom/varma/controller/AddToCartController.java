package com.ecom.varma.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.varma.entity.AddToCart;
import com.ecom.varma.service.AddToCartService;

@RestController
@RequestMapping("/api")
public class AddToCartController {
	@Autowired
	AddToCartService cartService;
	@PostMapping("/post")
	public AddToCart addItemToCart(@RequestBody AddToCart addCart){
		return cartService.addItemToCart(addCart);
	}
	@GetMapping("/get")
	public List<AddToCart> getAll(){
		return cartService.getAll();
	}
	@GetMapping("/getby/{productId}")
	public Optional<AddToCart> findByProductId(@PathVariable Long productId){
		return cartService.findByProductId(productId);
	}
	@DeleteMapping("/remove/{cartId}")
	public String deleteById(@PathVariable Long cartId) {
		cartService.deleteById(cartId);
		return "Record Deleted";
	}
}
