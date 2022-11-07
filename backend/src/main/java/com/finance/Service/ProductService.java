package com.finance.Service;

import java.util.List;

import com.finance.Entity.Product;


public interface ProductService {
	public List<Product> viewProduct();
	public Product findProduct(int prodid);
	public String addProducts(Product product);
	public List<Product> viewProductByName(String prodname);

}
