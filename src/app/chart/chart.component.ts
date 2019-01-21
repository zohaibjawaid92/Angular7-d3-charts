import {  Component , OnInit,ViewEncapsulation, AfterViewInit, ElementRef} from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import { sp500 } from './data';

export interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface Stock {
  date: Date;
  price: number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ChartComponent implements OnInit, AfterViewInit {
  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.drawChart(sp500.map((o) => ({
      date: new Date(o.date),
      price: o.price
    })))
  }


private drawChart(data: any[]) {
  const widthX = 960;
  const heightY = 500;
  const d3 = this.d3;
  const svg = d3.select(this.parentNativeElement).
  select("div#areaChart")
  .append('svg')
  .attr('preserveAspectRatio', 'none')
  .attr('viewBox', '0 0 960 500');
  const margin = {top: 20, right: 20, bottom: 110, left: 40};
  const margin2 = {top: 430, right: 20, bottom: 30, left: 40};
  const width = +widthX - margin.left - margin.right;
  const height = +heightY - margin.top - margin.bottom;
  const height2 = +heightY - margin2.top - margin2.bottom;

const x: any = d3.scaleTime().range([0, width]),
  x2 = d3.scaleTime().range([0, width]),
  y: any = d3.scaleLinear().range([height, 0]),
  y2 = d3.scaleLinear().range([height2, 0]);

const xAxis = d3.axisBottom(x),
  xAxis2 = d3.axisBottom(x2),
  yAxis = d3.axisLeft(y);

const brush = d3.brushX()
  .extent([[0, 0], [width, height2]])
  .on("brush end", brushed);

const zoom = d3.zoom()
  .scaleExtent([1, Infinity])
  .translateExtent([[0, 0], [width, height]])
  .extent([[0, 0], [width, height]])
  .on("zoom", zoomed);

const area = d3.area()
  .curve(d3.curveMonotoneX)
  .x((d: any) => x(d.date))
  .y0(height)
  .y1((d: any) => y(d.price));

const area2 = d3.area()
  .curve(d3.curveMonotoneX)
  .x((d: any) =>  x2(d.date))
  .y0(height2)
  .y1((d: any) => y2(d.price));

svg.append("defs").append("clipPath")
  .attr("id", "clip")
.append("rect")
  .attr("width", width)
  .attr("height", height);

const focus = svg.append("g")
  .attr("class", "focus")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const context = svg.append("g")
  .attr("class", "context")
  .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");


x.domain(d3.extent(data, (d: any) => d.date));
y.domain([0, d3.max(data, (d: any) => d.price)]);
x2.domain(x.domain());
y2.domain(y.domain());

focus.append("path")
    .datum(data)
    .attr("class", "area")
    .attr("d", area);

focus.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

focus.append("g")
    .attr("class", "axis axis--y")
    .call(yAxis);

context.append("path")
    .datum(data)
    .attr("class", "area")
    .attr("d", area2);

context.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height2 + ")")
    .call(xAxis2);

context.append("g")
    .attr("class", "brush")
    .call(brush)
    .call(brush.move, x.range());

svg.append("rect")
    .attr("class", "zoom")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(zoom);

function brushed() {
if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
const s = d3.event.selection || x2.range();
x.domain(s.map(x2.invert, x2));
focus.select(".area").attr("d", area);
focus.select(".axis--x").call(xAxis);
svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
    .scale(width / (s[1] - s[0]))
    .translate(-s[0], 0));
}

function zoomed() {
if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
const t = d3.event.transform;
x.domain(t.rescaleX(x2).domain());
focus.select(".area").attr("d", area);
focus.select(".axis--x").call(xAxis);
context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
}

   }

}
