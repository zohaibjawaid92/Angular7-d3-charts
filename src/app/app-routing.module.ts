import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { ChartComponent } from './chart/chart.component';
import {TestComponent} from './test/test.component'
import {CondegramSprialPlotComponent} from './condegram-sprial-plot/condegram-sprial-plot.component';
import {BarChartComponent} from './bar-chart/bar-chart.component'
import {LinechartComponent} from './linechart/linechart.component'
import {SunbrustComponent} from './sunbrust/sunbrust.component'
import {HomeComponent} from './home/home.component'
import {ChartJSComponent} from './chart-js/chart-js.component'
import { Test4Component } from './test4/test4.component';
import { Test3Component} from './test3/test3.component';
import {Test5Component} from './test5/test5.component';
const routes: Routes = [
  { path: 'word_cloud', component: WordCloudComponent },
  { path: 'brushzoom',      component: ChartComponent },
  {path : 'condegram-spiral-plot' , component : CondegramSprialPlotComponent},
  {path : 'bar-chart' , component : BarChartComponent },
  {path : 'line-chart' , component : LinechartComponent},
  {path : 'sunbrust' , component : SunbrustComponent},
  {path : '' , component: TestComponent }, 
  {path : 'chart' , component : ChartJSComponent},
  {path : 'test' , component : Test3Component , 
  children : [
    {path : 'test4' , component : Test4Component},
    {path : 'test5' , component : Test5Component}

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
