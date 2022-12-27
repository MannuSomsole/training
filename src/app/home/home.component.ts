import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fruits:any = [
    {id: 1, name:'Mango'},
    {id: 2, name:'Banana'},
    {id: 5, name:'Grapes'},
    {id: 3, name:'papaya'},
    {id: 4, name:'watermelon'}
  ];
  name = 'Test';
  student = {
    name: 'abc',
    school: 'ABC univ'
  };
  constructor() { }

  ngOnInit(): void {

  }



}
