import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Company, Stock } from '../model/model.component';
import { CompanyService, StockService } from '../service/service.component'

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  cmpDetail !: FormGroup;
  cmpObj: Company = new Company();
  cmpList: Company[] = [];
  stockObj: Stock = new Stock();
  stkDetail !: FormGroup;
  date !: Date;

  constructor(private formBuilder: FormBuilder, private stkService: StockService, private cmpService: CompanyService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllCompany();

    this.cmpDetail = this.formBuilder.group({
      code: [''],
      name: [''],
      ceo: [''],
      turnover: [''],
      website: [''],
      exchange: ['']
    });

    this.stkDetail = this.formBuilder.group({
      code: [''],
      stockPrice: [''],
      dateAdded: [''],
      timeAdded: [''],
    });
  }

  addCompany() {
    console.log(this.cmpDetail);
    this.cmpObj.companyCode = this.cmpDetail.value.code;
    this.cmpObj.companyName = this.cmpDetail.value.name;
    this.cmpObj.companyCEO = this.cmpDetail.value.ceo;
    this.cmpObj.companyTurnover = this.cmpDetail.value.turnover;
    this.cmpObj.companyWebsite = this.cmpDetail.value.website;
    this.cmpObj.stockExchange = this.cmpDetail.value.exchange;

    this.cmpService.addCompany(this.cmpObj).subscribe(res => {
      console.log(res);
      this.getAllCompany();
    }, err => {
      console.log(err);
    });

  }

  addStock() {
    console.log(this.stkDetail.value.stockPrice);
    this.stockObj.companyCode = this.stkDetail.value.code;
    this.stockObj.stockPrice = this.stkDetail.value.stockPrice;
    this.date=new Date();
    this.stockObj.dateAdded = this.date.toString();
    this.stockObj.timeAdded = this.date.toString();

    this.stkService.addStock(this.stockObj).subscribe(res => {
      console.log("Response:" + res.dateAdded);
    }, err => {
      console.log(err);
    });

  }
  getAllCompany() {
    this.cmpService.getAllCompany().subscribe(res => {
      this.cmpList = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }


}
