package com.example.companyreg.entities;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "stocks")
public class Stock {
	@Id
	private String stockId;
	@NotBlank(message = "This field is mandatory!")
	private String companyCode;
	@NotNull(message = "This field is mandatory!")
	private double stockPrice;
	@NotBlank(message = "This field is mandatory!")
	private String dateAdded;
	@NotBlank(message = "This field is mandatory!")
	private String timeAdded;

	public String getStockId() {
		return stockId;
	}

	public void setStockId(String stockId) {
		this.stockId = stockId;
	}

	public double getStockPrice() {
		return stockPrice;
	}

	public String getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}

	public void setStockPrice(double stockPrice) {
		this.stockPrice = stockPrice;
	}

	public String getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(String dateAdded) {
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		Date date = new Date();
		dateAdded = formatter.format(date);
		this.dateAdded = dateAdded;
	}

	public String getTimeAdded() {
		return timeAdded;
	}

	public void setTimeAdded(String timeAdded) {
		SimpleDateFormat formatter = new SimpleDateFormat("hh:mm:ss");
		Date date = new Date();
		timeAdded = formatter.format(date);
		this.timeAdded = timeAdded;
	}

}
