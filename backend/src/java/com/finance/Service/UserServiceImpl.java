package com.finance.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.finance.Entity.User;
import com.finance.Repository.UserRepository;
@Service
@Transactional

public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;
	
	@Override
	public User addUser(User user) {
		userRepo.save(user);
		List<User> myusers= new ArrayList<User>();
		myusers=userRepo.findAll();
		return myusers.get(myusers.size()-1);
	}

	@Override
	public User findUserByUname(String userName) {
		return userRepo.findUserByUname(userName);
	}

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

}
