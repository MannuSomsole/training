import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {


  public newname="Ramajnkj"
  public message:any;

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
  today = new Date();
  userData:any;
  constructor(public apiService: ApiService,public router: Router) { }

  ngOnInit(): void {

  }

  getUserData() {
    console.log('User Data');
    this.apiService.getData('../assets/mockdata/user.json').subscribe(
        data => {
          console.log(data);
          this.userData = data;
          console.log("sdfsdfsdgdfg:", this.userData);

        }, //next callback
        error => { console.log("error") }, //error callback
        () => { console.log("Completed") } //complete callback
    )

  }
  
  goToUserComponent() {
   
    this.router.navigate(['user']);
    
  }

}
