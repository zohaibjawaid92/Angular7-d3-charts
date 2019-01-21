import { Component, OnInit , ElementRef , ViewEncapsulation} from '@angular/core';
import { D3Service, D3, Selection  } from 'd3-ng2-service';
import {sp500} from './data';
import * as Chart from 'chart.js';
import {AuthenticateService} from '../services/authenticate.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
  private d3: D3; 
  private parentNativeElement: any;
  canvas: any;
  ctx: any;
  dummyData: Object[];
  constructor(element: ElementRef, d3Service: D3Service ,
    private af :AuthenticateService){ 
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    this.getData()
  }

  ngAfterViewInit(){
    this.createChart()
    this.createChart1()
    this.createChart2()
  }

  getData(){
    this.af.data().subscribe( data => {
    console.log('getting data' , data);
      


  })
}


  createChart(){
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
        let myChart = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
            labels: ["New", "In Progress", "On Hold"],
            datasets: [{
                label: '# of Votes',
                data: [1,2,3],
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

  createChart1(){  
    this.canvas = document.getElementById('myChart1');
    this.ctx = this.canvas.getContext('2d');
        let myChart = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
            labels: ["New", "In Progress", "On Hold"],
            datasets: [{
                label: '# of Votes',
                data: [1,2,3],
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
  createChart2(){
    
    this.canvas = document.getElementById('myChart2');
    this.ctx = this.canvas.getContext('2d');
        let myChart = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
            labels: ["New", "In Progress", "On Hold"],
            datasets: [{
                label: '# of Votes',
                data: [1,2,3],
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
  
   
  // drawChart(data : any[]){
  //   const d3 = this.d3;
  //   var percent = .9; // 0.0 to 1.0
  //   var text = (percent * 100) + "%";
    
  //   var width = 260;
  //   var height = 260;
  //   var thickness = 30;
  //   var duration = 750;
  //   var foregroundColor = "#0a8";
  //   var backgroundColor = "#ccc";
    
  //   var radius = Math.min(width, height) / 2;
  //   var color = d3.scaleOrdinal([foregroundColor, backgroundColor]);
    
  //   var svg = d3
  //   .select(this.parentNativeElement)
  //   .select("div#chart")
  //   .append('svg')
  //   .attr('class', 'pie')
  //   .attr('width', width)
  //   .attr('height', height);

  //   var g = svg.append('g')
  //   .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');
    
  //   var arc : any = d3.arc()
  //   .innerRadius(radius - thickness)
  //   .outerRadius(radius);
    
  //   var pie = d3.pie()
  //   .sort(null);
    
  //   var path = g.selectAll('path')
  //   .data(pie([0, 1]))
  //   .enter()
  //   .append('path')
  //   .attr('d', arc)
  //   .attr('fill', function(d : any, i : any) {
  //     return color(i);
  //   })
  //   .each(function(d : any) { this._current = d; });
    
    
  //   path.data(pie([percent, 1-percent])).transition()
  //     .duration(duration)
  //     .attrTween('d', function(d) {
  //     var interpolate = d3.interpolate(this._current, d);
  //     this._current = interpolate(0);
  //     return function(t) {
  //       return arc(interpolate(t));
  //     }
  //   });
    
  //   g.append('text')
  //     .attr('text-anchor', 'middle')
  //     .attr('dy', '.35em')
  //     .text(text);
  // }

}
