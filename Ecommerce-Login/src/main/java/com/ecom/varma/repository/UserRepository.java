package com.ecom.varma.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecom.varma.model.UserTable;
@Repository
public interface UserRepository extends JpaRepository<UserTable,Long>{

	List<UserTable> findAll();

	UserTable getByUserName(String userName);

}
