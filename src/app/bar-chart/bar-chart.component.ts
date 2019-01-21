import { Component, OnInit , ElementRef , AfterViewInit , ViewEncapsulation} from '@angular/core';
import { D3Service, D3, Selection  } from 'd3-ng2-service';
// import d3Tip  from 'd3-tip';

import {sp500} from './data';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit , AfterViewInit {
  private d3: D3; 
  private parentNativeElement: any;




    constructor(element: ElementRef, d3Service: D3Service) {
      this.d3 = d3Service.getD3();
      this.parentNativeElement = element.nativeElement;
    }

  ngOnInit() {
  }

  ngAfterViewInit(){
      this.drawChart(sp500);
      this.pieChart();
      this.donutChart();
      // this.donutPieChart();
   
  }


private drawChart(data : any[]){
const d3 = this.d3;
debugger;
// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 40},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
.range([0, width])
.padding(0.1);
var y = d3.scaleLinear()
.range([height, 0]);


var svg = d3.select(this.parentNativeElement).select('div#barchart').append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", 
"translate(" + margin.left + "," + margin.top + ")");

var tooltip = d3.select("div#barchart").append("div").attr("class", "toolTip");

// format the data
data.forEach(function(d) {
d.sales = +d.sales;
});

// Scale the range of the data in the domains
x.domain(data.map(function(d) { return d.salesperson; }));
y.domain([0, d3.max(data, function(d) { return d.sales; })]);

// append the rectangles for the bar chart
svg.selectAll(".bar")
.data(data)
.enter().append("rect")
.attr("class", "bar")
.attr("x", function(d) { return x(d.salesperson); })
.attr("width", x.bandwidth())
.attr("y", function(d) { return y(d.sales); })
.attr("height", function(d) { return height - y(d.sales); })
.on("mousemove", function(d : any){
  tooltip
    .style("left", d3.event.pageX - 50 + "px")
    .style("top", d3.event.pageY - 70 + "px")
    .style("display", "inline-block")
    .html((d.salesperson) + "<br>" + "£" + (d.sales));
})
.on("mouseout", function(d : any){ tooltip.style("display", "none");});
// add the x Axis
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x));

// add the y Axis
svg.append("g")
.call(d3.axisLeft(y));


  }


private pieChart(){
//   const d3 = this.d3;
//   var data = [10, 20, 100];

//   var width = 960,
//       height = 500,
//       radius = Math.min(width, height) / 2;
  
//   var color = d3.scaleOrdinal()
//       .range(["#98abc5", "#8a89a6", "#7b6888"]);
  
//   let arc : any= d3.arc()
//       .outerRadius(radius - 10)
//       .innerRadius(0);
  
//   var labelArc = d3.arc()
//       .outerRadius(radius - 40)
//       .innerRadius(radius - 40);
  
//   var pie = d3.pie()
//       .sort(null)
//       .value(function(d : any) { return d; });
  
//   var svg = d3.select("div#pieChart").append("svg")
//       .attr("width", width)
//       .attr("height", height)
//     .append("g")
//       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
//     var g = svg.selectAll(".arc")
//         .data(pie(data))
//       .enter().append("g")
//         .attr("class", "arc");
  
//     g.append("path")
//         .attr("d", arc)
//         .style("fill", (d : any) => color(d.data));
  
//     g.append("text")
//         .attr("transform", function(d : any) { return "translate(" + labelArc.centroid(d) + ")"; })
//         .attr("dy", ".35em")
//         .text(function(d : any) { return d.data; });
 }




private donutChart(){
//   const d3 = this.d3;
//   var data  : any= [
//     {name: "USA", value: 40},
//     {name: "UK", value: 20},
//     {name: "Canada", value: 30},
//     {name: "Maxico", value: 10},
//   ];
//   var text = "";
  
//   var width = 260;
//   var height = 260;
//   var thickness = 25;
//   var duration = 750;
  
//   var radius = Math.min(width, height) / 2;
//   var color = d3.scaleOrdinal(d3.schemeCategory10);
  
//   var svg = d3.select("div#donut")
//   .append('svg')
//   .attr('class', 'pie')
//   .attr('width', width)
//   .attr('height', height);
  
//   var g = svg.append('g')
//   .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');
  
//   var arc = d3.arc()
//   .innerRadius(radius - thickness)
//   .outerRadius(radius);
  
//   var pie = d3.pie()
//   .value(function(d : any) { return d.value; })
//   .sort(null);
  
//   var path = g.selectAll('path')
//   .data(pie(data))
//   .enter()
//   .append("g")
//   .on("mouseover", function(d : any) {
//         let g = d3.select(this)
//           .style("cursor", "pointer")
//           .style("fill", "black")
//           .append("g")
//           .attr("class", "text-group");
   
//         g.append("text")
//           .attr("class", "name-text")
//           .text(`${d.data.name}`)
//           .attr('text-anchor', 'middle')
//           .attr('dy', '-1.2em');
    
//         g.append("text")
//           .attr("class", "value-text")
//           .text(`${d.data.value}`)
//           .attr('text-anchor', 'middle')
//           .attr('dy', '.6em');
//       })
//     .on("mouseout", function(d : any) {
//         d3.select(this)
//           .style("cursor", "none")  
//           .style("fill", color(this._current))
//           .select(".text-group").remove();
//       })
//     .append('path')
//     .attr('d', arc)
//     .attr('fill', (d : any,i : any) => color(i))
//     .on("mouseover", function(d) {
//         d3.select(this)     
//           .style("cursor", "pointer")
//           .style("fill", "black");
//       })
//     .on("mouseout", function(d) {
//         d3.select(this)
//           .style("cursor", "none")  
//           .style("fill", color(this._current));
//       })
//     .each(function(d, i) { this._current = i; });
  
  
//   g.append('text')
//     .attr('text-anchor', 'middle')
//     .attr('dy', '.35em')
//     .text(text);
// }


// private donutPieChart(){
//   const d3 = this.d3;
//   var tooltip = d3.select('div#dountPieChart')            
//   .append('div')                             
//   .attr('class', 'tooltip');                 

//   tooltip.append('div')                        
//   .attr('class', 'label');                   

//   tooltip.append('div')                        
//   .attr('class', 'count');                   

//   tooltip.append('div')                        
//   .attr('class', 'percent');                 

//         var dataset : any = [
//           {label:'Monday',value:379130},
//           {label:'Tuesday',value:424923},
//           {label:'Wednesday',value:430728},
//           {label:'Thursday',value:432138},
//           {label:'Friday',value:428295},
//           {label:'Saturday',value:368239},
//           {label:'Sunday',value:282701}
//         ];

//         var width = 360;
//         var height = 360;
//         var radius = Math.min(width, height) / 2;

//         var color = d3.scaleOrdinal(d3.schemeCategory10);

//         var svg = d3.select('div#dountPieChart')
//           .append('svg')
//           .attr('width', width)
//           .attr('height', height)
//           .append('g')
//           .attr('transform', 'translate(' + (width / 2) + 
//             ',' + (height / 2) + ')');
        
//         var donutWidth = 75;

//         var arc = d3.arc()
//           .innerRadius(radius - donutWidth)
//           .outerRadius(radius);

//         var pie = d3.pie()
//           .value(function(d : any) { return d.value; })
//           .sort(null);

//         var legendRectSize = 18;
// 				var legendSpacing = 4;
        
//         var path = svg.selectAll('path')
//           .data(pie(dataset))
//           .enter()
//           .append('path')
//           .attr('d', arc)
//           .attr('fill', function(d : any, i) { 
//             return color(d.data.label);
          
//           });
        
//         path.on('mouseover', function(d) {
//          var total = d3.sum(dataset.map(function(d) {
//         return d.value;
//         }));
//       var percent = Math.round(1000 * d.data.value / total) / 10;
//       tooltip.select('.label').html(d.data.label);
//       tooltip.select('.count').html(d.data.value);
//       tooltip.select('.percent').html(percent + '%');
//       tooltip.style('display', 'block');
//       });
        
//         path.on('mouseout', function() {
//       tooltip.style('display', 'none');
//     });
          
//         var legend = svg.selectAll('.legend')
//       .data(color.domain())
//       .enter()
//       .append('g')
//       .attr('class', 'legend')
//       .attr('transform', function(d, i) {
//       var height = legendRectSize + legendSpacing;
//       var offset =  height * color.domain().length / 2;
//       var horz = -2 * legendRectSize;
//       var vert = i * height - offset;
//       return 'translate(' + horz + ',' + vert + ')';
//     });
        
//         legend.append('rect')
//   .attr('width', legendRectSize)
//   .attr('height', legendRectSize)
//   .style('fill', color)
//   .style('stroke', color);
        
//         legend.append('text')
//   .attr('x', legendRectSize + legendSpacing)
//   .attr('y', legendRectSize - legendSpacing)
//   .text(function(d) { return d; });

 }


}
