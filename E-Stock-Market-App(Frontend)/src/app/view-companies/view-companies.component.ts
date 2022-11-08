import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Company } from '../model/model.component';
import { CompanyService } from '../service/service.component'

@Component({
  selector: 'app-view-companies',
  templateUrl: './view-companies.component.html',
  styleUrls: ['./view-companies.component.css']
})
export class ViewCompaniesComponent implements OnInit {

  cmpDetail !: FormGroup;
  cmpObj: Company = new Company();
  cmpList: Company[] = [];

  constructor(private formBuilder: FormBuilder, private cmpService: CompanyService) { }

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
  }

  getAllCompany() {
    this.cmpService.getAllCompany().subscribe(res => {
      this.cmpList = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }
}
