package com.finance.Service;

import java.util.List;

import com.finance.Entity.CardDetails;
import com.finance.Entity.ProductHistory;
import com.finance.Entity.User;

public interface FinanceService {
	public List<ProductHistory> getProducts(int regid);
	public List<User> getAllDetails();
	public User getDetailsByRegId(long regid);
	public String addDetails(User userDet);
	public CardDetails getCardDetailsByRegId(long regid);

}
