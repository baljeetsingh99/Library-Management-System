package com.libraryManageSyst.lms.services;

import com.libraryManageSyst.lms.entities.Users;
import com.libraryManageSyst.lms.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public List<Users> findAll(){
        return userRepo.findAll();
    }

    public Users saveUser(Users users) {
        return userRepo.save(users);
    }
}
