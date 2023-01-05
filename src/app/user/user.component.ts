import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData:any;

  constructor(public userService:UserService) { }

  ngOnInit(): void 
   {
    console.log('User Data');
    this.userService.getData('../assets/mockdata/user1.json').subscribe(
        data => 
        {
          console.log(data);
          this.userData = data;
          console.log("This data is from user1.json file:", this.userData);

        }, //next callback
        error => { console.log("error") }, //error callback
        () => { console.log("Completed") } //complete callback
    )

}
}