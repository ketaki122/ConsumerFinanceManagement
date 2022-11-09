package com.finance.Service;

import java.util.List;

import com.finance.Entity.User;

public interface UserService {
	public boolean addUser(User user);
	public User findUserByUname(String uname);
	public List<User> getAllUsers();

}
