package com.libraryManageSyst.lms.repository;

import com.libraryManageSyst.lms.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Users, Long> {
}
