package com.ecom.varma.feignclient;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import com.ecm.first.entity.Products;
@FeignClient(name = "Ecommerce-ProductsTable", url = "http://localhost:9011/products")
public interface FeignCartClient{
	@GetMapping("/get/{productId}")
	List<Products> findByProductId(Long productId);
}
 