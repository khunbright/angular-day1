import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workshop2',
  templateUrl: './workshop2.component.html',
  styleUrls: ['./workshop2.component.css']
})
export class Workshop2Component {
name ='';
@Input() text ='';

textSubmit ='';

send(){
  this.textSubmit = this.text;
}

eventText=''
showText(event:any){
  this.eventText = event;
}
}
