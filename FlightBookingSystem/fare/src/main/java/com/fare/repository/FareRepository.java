package com.fare.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fare.entity.Fare;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface FareRepository extends MongoRepository<Fare, Integer>{
    @Query("{'farePrice':?0}")
    Optional<Fare> findByPrice(double farePrice);
}
