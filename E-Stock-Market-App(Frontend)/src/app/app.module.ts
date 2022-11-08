import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewStockComponent } from './view-stock/view-stock.component';
import { ViewCompaniesComponent } from './view-companies/view-companies.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ViewStockComponent,
    ViewCompaniesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
