import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoggedIn = true;
  messages: any[] = [];
  obs = new Observable((observer) => {
    console.log("Observable start");
    observer.next("1")
    observer.next("2")
    observer.next("3")
    observer.next("4")
    observer.next("5")
  });
  constructor(public msgService: MessageService) {
    console.log('constructor....');
    this.msgService.getMessage().subscribe(
      data => {
        if (data) {
          this.messages.push(data);
      } else {
          // clear messages when empty message received
          this.messages = [];
      }
      }, //next callback
      error => { console.log("error") }, //error callback
      () => { console.log("Completed") } //complete callback
    )
  }

  ngOnInit(): void {
    console.log('in ngonInit...')
    this.obs.subscribe(
      data => { console.log(data) }, //next callback
      error => { console.log("error") }, //error callback
      () => { console.log("Completed") } //complete callback
    );
  }

  sendMessage() {
    this.msgService.setMessage('hello');
  }

  getMessage() {

  }

}
