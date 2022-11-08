import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, Stock, StockDetail, StockResDetail } from '../model/model.component';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  addCmpURL: string;
  getCmpURL: string;
  getAllCmpURL: string;
  deleteCmpUrl: string;

  constructor(private http: HttpClient) {
    /**
    this.addCmpURL = 'http://localhost:9091/company/register';
    this.getCmpURL = 'http://localhost:9091/company/info'
    this.getAllCmpURL = 'http://localhost:9091/company/getAll';
    this.deleteCmpUrl = 'http://localhost:9091/company/deleteCompanyByCode';
    **/
    this.addCmpURL = 'http://estockmarket-env.eba-u9pp93et.ap-northeast-1.elasticbeanstalk.com/company/register';
    this.getCmpURL = 'http://estockmarket-env.eba-u9pp93et.ap-northeast-1.elasticbeanstalk.com/company/info'
    this.getAllCmpURL = 'http://estockmarket-env.eba-u9pp93et.ap-northeast-1.elasticbeanstalk.com/company/getAll';
    this.deleteCmpUrl = 'http://estockmarket-env.eba-u9pp93et.ap-northeast-1.elasticbeanstalk.com/company/deleteCompanyByCode';
     
  }

  addCompany(cmp: Company): Observable<Company> {
    return this.http.post<Company>(this.addCmpURL, cmp);

  }

  getCompanyByCode(cmpCode:string): Observable<Company>{
    return this.http.get<Company>(this.getCmpURL+'/'+cmpCode);
  }
  getAllCompany(): Observable<Company[]>{
    return this.http.get<Company[]>(this.getAllCmpURL);
  }
  deletePatient(cmp : Company) : Observable<Company> {
    return this.http.delete<Company>(this.deleteCmpUrl+'/'+cmp.companyCode);
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class StockService{
  getStkURL: string;
  addStkURL: string; 
  
  constructor(private http: HttpClient) {
    //this.getStkURL = 'http://localhost:9091/stock/get';
    //this.addStkURL = 'http://localhost:9091/stock/add';
    this.getStkURL = 'http://estockmarket-env.eba-u9pp93et.ap-northeast-1.elasticbeanstalk.com/stock/get';
    this.addStkURL = 'http://estockmarket-env.eba-u9pp93et.ap-northeast-1.elasticbeanstalk.com/stock/add';
  }

  getStockByFromAndTo(stk:StockDetail): Observable<StockResDetail[]> {
    return this.http.get<StockResDetail[]>(this.getStkURL+'/'+stk.companyCode+'/'+stk.startDate+'/'+stk.endDate);
  }

  addStock(stk: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.addStkURL+'/'+stk.companyCode, stk);
  }

  
}
