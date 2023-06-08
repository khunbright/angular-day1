import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sub2-workshop2',
  templateUrl: './sub2-workshop2.component.html',
  styleUrls: ['./sub2-workshop2.component.css']
})
export class Sub2Workshop2Component {
@Output() sendText = new EventEmitter<string>();

text: string ="";
submit(){
  this.sendText.emit(this.text)
}
}
