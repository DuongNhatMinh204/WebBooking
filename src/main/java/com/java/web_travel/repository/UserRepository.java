package com.java.web_travel.repository;


import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<SecurityProperties.User, Long> {
    Optional<SecurityProperties.User> findByUsername(String username);
}