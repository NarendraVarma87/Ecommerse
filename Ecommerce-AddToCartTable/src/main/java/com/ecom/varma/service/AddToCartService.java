package com.ecom.varma.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.varma.entity.AddToCart;
import com.ecom.varma.repository.AddToCartRepository;

@Service
public class AddToCartService {
	@Autowired
	AddToCartRepository cartRepo;

	public AddToCart addItemToCart(AddToCart addCart) {
		return cartRepo.save(addCart);
	}

	public List<AddToCart> getAll() {
		
		return cartRepo.findAll();
	}

	public Optional<AddToCart> findByProductId(Long productId) {
		
		return cartRepo.findById(productId);
	}

	public void deleteById(Long cartId) {
		cartRepo.deleteById(cartId);
	}
	
}
