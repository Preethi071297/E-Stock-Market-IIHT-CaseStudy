export class Company {
  companyCode: string = '';
  companyName: string = '';
  companyCEO: string = '';
  companyTurnover: number = 0;
  companyWebsite: string = '';
  stockExchange:string = ''
}

export class Stock{
  companyCode:string='';
  stockPrice:number = 0;
  dateAdded:string='';
  timeAdded:string='';
}

export class StockDetail{
  companyCode:string='';
  startDate:string='';
  endDate:string=''
}
export class StockResDetail{
  stockPrice:number = 0;
  dateAdded:string='';
  timeAdded:string=''
}