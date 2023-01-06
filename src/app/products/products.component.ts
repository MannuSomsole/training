import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  message: any;
  constructor() { }

  ngOnInit(): void {

  }

  getDataFromChild($event: any) {
    this.message = $event;
    console.log( this.message)
  }
}
