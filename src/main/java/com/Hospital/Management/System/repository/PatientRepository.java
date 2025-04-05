package com.Hospital.Management.System.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hospital.Management.System.entity.Patient;


@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{//jpa repository q use kartha hai because database me data ko store karne  ke liya 

	

}
