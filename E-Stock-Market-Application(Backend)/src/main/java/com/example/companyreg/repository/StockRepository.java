package com.example.companyreg.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.companyreg.entities.Stock;

@Repository
public interface StockRepository extends MongoRepository<Stock, String> {

}
