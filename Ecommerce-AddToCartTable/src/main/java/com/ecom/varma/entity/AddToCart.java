package com.ecom.varma.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Table
@Entity
@Data
public class AddToCart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cartId;
	@Column
    private Integer quantity;
	@Column
	private Long productId;
	@Column
	private String productDescription;
	@Column
	private String productTitle;
	@Column
	private Double productPrice;
	@Column
	private String productUrl;
	
}
