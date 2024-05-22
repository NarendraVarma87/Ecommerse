package com.ecom.varma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecom.varma.entity.AddToCart;

@Repository
public interface AddToCartRepository extends JpaRepository<AddToCart,Long> {

	@SuppressWarnings("unchecked")
	AddToCart save(AddToCart addCart);

}
