import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Company, Stock, StockDetail, StockResDetail } from '../model/model.component';
import { CompanyService, StockService } from '../service/service.component'

@Component({
  selector: 'app-view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.css']
})
export class ViewStockComponent implements OnInit {

  cmpCode !: FormGroup;
  stockObj: Stock = new Stock();
  cmpObj: Company = new Company();
  stkDetail !: FormGroup;
  stkObj: StockDetail = new StockDetail();
  stkResObj: StockResDetail[] = [];
  stkPriceArr: Array<number> = [];

  constructor(private formBuilder: FormBuilder, private cmpService: CompanyService, private stkService: StockService) { }

  ngOnInit(): void {
    this.getCompanyByCode();

    this.cmpCode = this.formBuilder.group({
      code: [''],
    });

    this.stkDetail = this.formBuilder.group({
      code: this.cmpCode?.value.code,
      from: [''],
      to: ['']
    });
  }

  getCompanyByCode() {
    console.log(this.cmpCode);
    console.log(this.stockObj);
    this.stockObj.companyCode = this.cmpCode?.value.code;

    this.cmpService.getCompanyByCode(this.stockObj.companyCode).subscribe(res => {
      this.cmpObj = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }
  getStockByFromAndTo() {
    this.stkObj.companyCode = this.cmpCode?.value.code;
    this.stkObj.startDate = this.stkDetail?.value.from;
    this.stkObj.endDate = this.stkDetail?.value.to;
    console.log(this.stkObj);
    this.stkService.getStockByFromAndTo(this.stkObj).subscribe(res => {
      this.stkResObj = res;
      console.log("StockResponse : "+this.stkResObj);
      for (let stock of this.stkResObj) {
        console.log("StockPrice" + stock.stockPrice);
        this.stkPriceArr.push(stock.stockPrice);
        console.log("StockPriceArray"+this.stkPriceArr);
      }
    }, err => {
      console.log("error while fetching data.")
    });
  }
  getMax() {
    console.log("Max:" + this.stkPriceArr);
    return Math.max(...this.stkPriceArr);
  }
  getMin() {
    return Math.min(...this.stkPriceArr);
  }
  getAverage() {
    var sum = 0;
    for (var i = 0; i < this.stkPriceArr.length; i++) {
      sum += this.stkPriceArr[i];
    }

    var avg = sum / this.stkPriceArr.length;
    return avg;
  }

}
