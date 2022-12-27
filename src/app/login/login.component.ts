import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'test';
  myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'
  }
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goBack() {
    console.log('Go back clicked');
    this.router.navigate(['home']);
    // this.router.navigateByUrl('/login')
  }
  login() {
    console.log('Hello button clicked');
     this.router.navigate(['dashboard']);
  }

}
