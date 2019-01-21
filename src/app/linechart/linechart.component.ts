import { Component, OnInit , ElementRef , ViewEncapsulation} from '@angular/core';
import { D3Service, D3, Selection  } from 'd3-ng2-service';
import {sp500} from './data';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LinechartComponent implements OnInit {

  private d3: D3; 
  private parentNativeElement: any;
  radius : any;
  spiral : any;
  constructor(element: ElementRef, d3Service: D3Service) { 
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
  }
 
  ngAfterViewInit(){
    this.drawChart(sp500)
  }


drawChart(data : any[]){
    const d3 = this.d3;
    console.clear();
// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the area
 const area : any = d3.area()
    .x(function(d : any,i : any) { return x(d.x0); })
    .y0(height)
    .y1(function(d) { return y(d.length); });

// define the line
  const valueline : any = d3.line()
    .x(function(d : any) { return x(d.x0); })
    .y(function(d) { return y(d.length); });


var svg = d3.select("div#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
		.attr('class','chart')
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

render();
  
 function render() {
  // generate data
  var data = d3.range(2000).map(d3.randomBates(6));
  var bins=d3.histogram().thresholds(x.ticks(200))(data);

  // scale the range of the data
  x.domain(d3.extent(bins, function(d,i) { return d.x0; })).nice(2);
  y.domain(d3.extent(bins, function(d) { return d.length; })).nice();

  // add the area
  var a = svg.selectAll('.area')
     .data([bins]); // must cast as array
  
  var l = svg.selectAll('.line')
    .data([bins]);
  
  // enter
  a.enter()
    .append("path")
    .attr("class", "area")
    .transition()
    .duration(250)
    .attr("d", area);
 
  // update
  a.transition()
    .duration(250)
  	.attr("d", area);
    
  // exit
  a.exit().remove();
  
  // enter
  l.enter()
    .append("path")
    .attr("class", "line")
    .transition()
    .duration(250)
    .attr("d", valueline);
 
  // update
  l.transition()
    .duration(250)
  	.attr("d", valueline);
    
  // exit
  l.exit().remove();
  
  // add the X Axis
	var axisx = svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

	// add the Y Axis
	svg.append("g")
    .call(d3.axisLeft(y));

}

svg.on('click', function(){
  render();
});
  }

}
