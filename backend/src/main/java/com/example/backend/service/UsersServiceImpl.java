package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entity.Users;
import com.example.backend.repository.UsersRepository;

import java.util.List;

@Service
public class UsersServiceImpl implements UsersService
{
    @Autowired
    private UsersRepository usersRepository;

    @Override
    public List<Users> fetchUsers()
    {
        return usersRepository.findAll();
    }
}
