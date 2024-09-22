package com.libraryManageSyst.lms.controller;

import com.libraryManageSyst.lms.entities.Users;
import com.libraryManageSyst.lms.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/getall")
    public ResponseEntity<List<Users>> getAllUsers() {
        List<Users> users = userService.findAll();
        if (users.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(users);
    }

    @PostMapping("/add")
    public ResponseEntity<Users> addUser(@RequestBody Users users) {
        Users savedUser = userService.saveUser(users);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }




}
