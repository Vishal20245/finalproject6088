package com.Hospital.Management.System.doclogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hospital.Management.System.doclogin.enity.Appointment;


@Repository
public interface AppointmentsRepository extends JpaRepository<Appointment, Long>{

}
