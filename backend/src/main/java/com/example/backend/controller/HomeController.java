package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Users;
import com.example.backend.service.UsersService;

@RestController
@RequestMapping("/api/auth/")
public class HomeController
{
    @Autowired(required=true)
    private UsersService usersService;

    @GetMapping("/fetch")
    public List<Users> fetchUsers()
    {
        return usersService.fetchUsers();
    }

}
