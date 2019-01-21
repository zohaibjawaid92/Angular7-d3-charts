import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { D3Service } from 'd3-ng2-service';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule} from './material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { TestComponent } from './test/test.component';
import { CondegramSprialPlotComponent } from './condegram-sprial-plot/condegram-sprial-plot.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { SunbrustComponent } from './sunbrust/sunbrust.component';
import { LinechartComponent } from './linechart/linechart.component';
import { ChartJSComponent } from './chart-js/chart-js.component';
import {AuthenticateService} from './services/authenticate.service';
import {InterceptService} from './services/intercept.service';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { Test5Component } from './test5/test5.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ChartComponent,
    WordCloudComponent,
    TestComponent,
    CondegramSprialPlotComponent,
    BarChartComponent,
    SunbrustComponent,
    LinechartComponent,
    ChartJSComponent,
    MyNavComponent,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  providers: [D3Service , AuthenticateService,{
    provide : HTTP_INTERCEPTORS ,
    useClass : InterceptService, 
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
