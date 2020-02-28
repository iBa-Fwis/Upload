package com.testUpload.uploader.repository;

import com.testUpload.uploader.model.model;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface imageReposit extends JpaRepository<model, Long> {
    Optional<model> findByName(String name);
}
