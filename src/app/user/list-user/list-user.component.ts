import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from "../../service/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, OnDestroy {
  // subscription : any;
  public subscription ?: Subscription;
  users:User[]=[];

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    // this.getAll();
    this.subscription = this.userService.getAllUsers().subscribe((data : User[])=> {
      this.users = data;
    });
  }
  // getAll(){
  //   this.userService.getAll().subscribe((res:any)=>{
  //     this.data = res
  //   })
  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onDeleteUser(id: number){
    this.subscription = this.userService.deleteUser(id).subscribe((data : User)=> {
      // this.users = data;
      console.log(data);
      this.updateDataAfterDelete(id);
      console.log('user deleted successfully!');
    
    });
  }
  updateDataAfterDelete(id:number){
    for(var i = 0; i < this.users.length; i++){
      if (this.users[i].id == id) {
        this.users.splice(i,1);
        break;
      } 
    }
  }
}
