package com.finance.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finance.Entity.Admin;

@Repository
public interface AdminLoginRepository extends JpaRepository<Admin, Long> {
 public Admin findUserByAname(String aname);
}
