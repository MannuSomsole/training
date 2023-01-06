import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() childData: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log('In child component  childData from parent : ', this.childData)
  }

  sendMessage() {
    this.messageEvent.emit('Hello I am from child');
  }
}
