import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from "../../model/user.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy {
  public subscription ?: Subscription;
  user = {} as User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    // this.user = new User();
  }
  onAddUser(){
    console.log(this.user);
    this.subscription = this.userService.addUser(this.user).subscribe(data => {
      console.log(data);
    })
  }

  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
