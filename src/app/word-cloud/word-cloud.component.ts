import { Component, OnInit , AfterViewInit , ElementRef , ViewEncapsulation} from '@angular/core';
import { D3Service, D3, Selection  } from 'd3-ng2-service';
import * as cloud from 'd3-cloud'
import {sp500 } from './word';




@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WordCloudComponent implements OnInit{
  private d3: D3; 
  private parentNativeElement: any;
  public currentQuery: any;
  wordEntries: {key: string, value: number}[];
  xScale: any;
  fill: any;
  wordcloudData: any;
  mention: any;
  minFonts: any = 10;
  maxFonts: any = 90;
  public tagCloud: any;

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.word_Cloud(sp500)
  }

  private word_Cloud(data) {
    const d3s= this.d3;
    this.wordcloudData = data;
    const tooltip = d3s.select(this.parentNativeElement).select('#wordCloudtooltip')
      .attr('class', 'tooltipBubbleChart')
      .style('opacity', 0);
    this.fill =  d3s.scaleOrdinal(d3s.schemeCategory10);
    this.wordEntries = (<any>Object).entries(data).map(([key, value]) => ({key, value}));
    this.xScale = d3s.scaleLinear().domain([0, d3s.max(this.wordEntries, (d) => d.value)]).range([this.minFonts, this.maxFonts]);
    cloud().size([960, 500])
      .timeInterval(20)
      .words(this.wordEntries.map((entry) => ({
        text: entry.key,
        size: entry.value,
      })))
      .fontSize((d) => Math.round(this.xScale(d.size)))
      .text((d) => d.text)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .spiral('rectangular')
      .font('Impact')
      .on('end', draw)
      .start();
    const self = this;
    function draw( Data ) {
      if ( Data.length > 0 ) {
        const container = d3s.select(self.parentNativeElement).select('#wordsCount');
      container.select('svg').remove();
      const svg = container.append('svg')
        // .attr('width', self.width )
        // .attr('height', self.height );
        .attr('preserveAspectRatio', 'xMinYMin meet')
        .attr('viewBox', '0 0 960 500');
      svg.append('g')
        .attr('transform', `translate(${960 / 2}, ${500 / 2})`)
        .selectAll('text')
        .data(Data.map((word) => {
          return {
            text: word.text,
            rotate: word.rotate,
            x: word.x,
            y: word.y,
            size: word.size,
          };
        }))
        .enter()
        .append('text')
        .style('font-size', (d: any) => { return d.size + 'px'; })
        .on('mouseover', (d: any) => {
          tooltip
          .style('left', (d3s.event.pageX / 2) + 'px')
          .style('top', (d3s.event.pageY / 2) + 'px')
          .style('opacity', .7)
          .html( `<div width: max-content;background-color: black;color: white;border-radius: 5px;
          font-size: 13px;>Text <span style="color: #ffff;">|</span><span style="text-transform: capitalize">${d.text}</span> <br> 
          Count <span style="color: #ffff">|</span>${Math.round(self.xScale.invert(d.size))}</div>`);
        })
        .on('mouseout', (d) => {
          tooltip.style('opacity', 0);
        } )
        .on('click', (d) => console.log(d))
        .style('font-family', 'Impact')
        .style('fill', (d, i) => self.fill(i))
        .attr('text-anchor', 'middle')
        .attr('transform', (d: any) => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
        .text((d: any) => d.text);
      }
    }
    cloud().stop();
  }
 
  
  
  
}
