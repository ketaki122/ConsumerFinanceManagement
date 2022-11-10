package com.finance.Service;

import java.util.List;

import com.finance.Entity.User;

public interface AuthenticateUserService {
	public List<User> getUserdetails();
	//public boolean updateUser(Userdetails user);
		public boolean updateUser(long regid, boolean val);
		
		public User findUser(long regid);
		public boolean deleteUser(long regid);
		//public boolean deleteUser(Userdetails user);
		public boolean addUser(User user);

}
