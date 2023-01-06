import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'test';
  password="";
  myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'
  }
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  gotodashboard(pageName:string):void
  {
       this.router.navigate([`{pageName}`])
  }
  user() {
    console.log('Go back clicked');
    this.router.navigate(['user']);
    
  }
  goBack() {
    console.log('Go back clicked');
    this.router.navigate(['home']);
    // this.router.navigateByUrl('/login')
  }
  dashboard() {
    console.log('Hello button clicked');
     this.router.navigate(['dashboard']);
  }

}
