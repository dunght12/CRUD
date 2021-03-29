import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from "../../model/user.model";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {

  public subscription ?: Subscription;
  public subscriptionParams ?: Subscription;
  user = {} as User;
  constructor(
    private userService:UserService,
    public routerService : Router,
    public activatedRouteService : ActivatedRoute

    ) { }

  ngOnInit(): void {
    this.loadData();
  }
  // load lại thông tin
  loadData(){
    this.subscriptionParams =  this.activatedRouteService.params.subscribe(data => {
      console.log(data);
    this.userService.getUserById(data.id).subscribe((user : User)=> {
      // console.log(user);
      this.user = user;
      });
    });
  }
  onEditUser(){
    this.userService.updateUser(this.user).subscribe((data : User) => {
      console.log(data);
      this.routerService.navigateByUrl('users');
    })
  }
  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams){
      this.subscriptionParams.unsubscribe();
    }
  }

}
