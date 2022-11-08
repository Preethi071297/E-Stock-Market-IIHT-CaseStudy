package com.example.companyreg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import com.example.companyreg.entities.Stock;
import com.example.companyreg.repository.StockRepository;

@Service
public class StockServices {
	@Autowired
	private StockRepository stockRepository;
	@Autowired
	private MongoTemplate mongoTemplate;
	
	public Stock addStock(Stock stock) {
		return stockRepository.save(stock);
	}
	
	
	public List<Stock> getStockByCompanyCode(String companyCode , String startDate , String endDate) throws ParseException {
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");
		startDate=sdf2.format(sdf1.parse(startDate));
		endDate=sdf2.format(sdf1.parse(endDate));
		Criteria criteria = Criteria.where("dateAdded").gte(startDate)
				.andOperator(Criteria.where("dateAdded").lte(endDate));
		criteria = criteria.and("companyCode").is(companyCode);
		Query query = new Query(criteria);
		List<Stock> stocks = mongoTemplate.find(query,Stock.class);
		return stocks;
		
	}
	
	
	public void deleteCompanyByCode(String companyCode) {
		stockRepository.deleteById(companyCode);
	}
	
}


