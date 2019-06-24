import { Component, OnInit, Input } from '@angular/core';
import { CallbackInfo } from '../callback-details/callback-info';

@Component({
  selector: 'app-time-range-picker',
  templateUrl: './time-range-picker.component.html',
  styleUrls: ['./time-range-picker.component.css']
})
export class TimeRangePickerComponent implements OnInit {
  @Input() timeStart: string;
  @Input() timeEnd: string;
  @Input() cbi: CallbackInfo;
  timeInterval:number = 15;
  minIntervals:string [][];
  hourIntervals:string[][];
  hd:number[];
  smi: number[] = [-1,-1]; //selected minute intervals
  lsmi: number = -1; //last selected minute interval
  shi: number[] = [-1,-1]; //selected hour intervals
  lshi: number = -1; //last selected hour interval
  constructor() { 
    this.generateIntervals();
  }
  ngOnInit() {

  }

  generateIntervals(){
    // Hour intervals
    this.hourIntervals =[];
    this.hd =[];
    for (let i = 0; i < 24 ; i++) {
      this.hd.push(i+1);
      let end = (i + 1);
      end = (end >= 24) ? 0: end;
      let iv= [i, end]; // Interval number Values
      let s = this.zeroPadding(2, iv[0].toString()) + ":00";
      let e = this.zeroPadding(2, iv[1].toString()) + ":00";
      let isv  = [s,e]; // Interval string values
      this.hourIntervals.push(isv);
    }
    
    // Minute intervals
    let mic = 24 * (60/this.timeInterval) ; // Minute Intervals Count
    let hour = 0;
    let minutes = 0;
    this.minIntervals = []
    for (let i = 0; i < mic ; i++) {
      let startHour = hour;
      let startMinutes = minutes;
      let endHour = hour;
      minutes += this.timeInterval;
      let endMinutes = minutes;
      if (minutes >= 60 ){
        hour++;
        minutes = 0;
        endMinutes = 0;
        endHour = hour;
      }
      let s = this.zeroPadding(2, startHour.toString()) + ":" 
        + this.zeroPadding(2, startMinutes.toString());
      let e = this.zeroPadding(2, endHour.toString()) + ":" 
        + this.zeroPadding(2, endMinutes.toString());
      this.minIntervals.push([s,e]);
    }
  }
  zeroPadding(size:number, n:string ){
    return String("0".repeat(size - n.length)) + n;
  }

  getHourIntervalsAM(){
    return this.hourIntervals.slice(0,12);
  }

  getHourIntervalsPM(){
    return this.hourIntervals.slice(12,24);
  }
  getMinIntervalsAM() {
    let mic = 24 * (60/this.timeInterval) ; // Minute Intervals Count
    return this.minIntervals.slice(0,mic/2);
  }
  getMinIntervalsPM() {
    let mic = 24 * (60/this.timeInterval) ; // Minute Intervals Count
    return this.minIntervals.slice(mic/2,mic);
  }
  getHours(slot:string){
    let htmlOutput = ""
    let offset = (slot == "AM") ? 0 : 12;
    let hour = offset + 0;
    for (let index = 0; index < 25; index++) {
      if (index%2 == 0) {
        htmlOutput += '<div class="hour-label">'+hour+'</div>';
        hour++;
      } else {
        htmlOutput += '<div class="spacer"></div>';
      }
    }
    return htmlOutput;
  }
  selectHourInterval( sel: number){
    console.log(`selcting ${sel}`)
    if (this.shi[0] < 0 && this.shi[1] < 0 ){
      console.log(`shi was empty`)
      this.shi = [sel,sel];
    } else{
      this.shi =  (this.lshi <= sel)? [this.lshi, sel] : [sel,this.lshi]; // new selection
    }
    this.lshi = sel;
    this.timeStart = this.hourIntervals[this.shi[0]][0];
    this.timeEnd = this.hourIntervals[this.shi[1]][1];
    this.cbi.cbWindowStartTime = this.timeStart;
    this.cbi.cbWindowEndTime = this.timeEnd;
    console.log(`timestart(${this.shi[0]}): ${this.timeStart}:00 timeend(${this.shi[1]}): ${this.timeEnd}:00`);
    // Selection of hours
    for (let index = 0; index < this.hourIntervals.length; index++) {
      const element = this.hourIntervals[index];
      let d = document.getElementById("hi-" + index);
      if (index >= this.shi[0] && index <=this.shi[1] ){
        d.classList.add("selected");
      } else {
        d.classList.remove("selected");
      }
    }
    // Selection of minutes
    let ms = ((this.shi[0]+1) * 4 ) - 4;
    let me = ((this.shi[1] +1) * 4 ) - 1;
    this.smi = [ms,me];
    for (let index = 0; index < this.minIntervals.length ; index++) {
      const element = this.minIntervals[index];
      let d = document.getElementById("mi-" + index);
      if (index >= this.smi[0] && index <=this.smi[1] ){
        d.classList.add("selected");
      } else {
        d.classList.remove("selected");
      }
    }
  }
  selectedMinuteInterval(sel: number){

  }

}
