import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserProfile } from '../models/user.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user!:UserProfile
  constructor(public userService:UserService){}

  ngOnInit(): void {
      this.userService.getuserConnecter().subscribe(
        res=>this.user=res
      )
  }
}
