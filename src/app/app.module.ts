import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { HttpClientModule } from '@angular/common/http';
import { FlashnewsapiService } from './service/flashnewsapi.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [FlashnewsapiService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
