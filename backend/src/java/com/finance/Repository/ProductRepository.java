package com.finance.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finance.Entity.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
//	 public List<ProductHistory> findByRegid(long regid);
	public List<Product> findByProdname(String prodname);
	
}
