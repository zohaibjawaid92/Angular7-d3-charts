import { Component, OnInit , ViewEncapsulation , AfterViewInit , ElementRef} from '@angular/core';
import * as Chart from 'chart.js';
import {AuthenticateService} from '../services/authenticate.service';



@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class ChartJSComponent implements OnInit , AfterViewInit{
  canvas: any;
  ctx: any;


  constructor(private data : AuthenticateService) { }

  ngOnInit() {

  }

  ngAfterViewInit(){
  this.createChart()
  this.data1()
  }

  data1(){
    this.data.data().subscribe(res => {
      console.log(res);
    })
  }

  createChart(){
    
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
        let myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels: ["New", "In Progress", "On Hold", "Done"],
            datasets: [{
                label: '# of Votes',
                data: [1,2,3,4],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255,112,232,5)'
                ],
                borderWidth: 2
            }]
        },
        options: {
          responsive: false,
          
        }
      });
  }

}
