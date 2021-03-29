import { JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { AddComponent } from './user/add/add.component';
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { UsersComponent } from "./user/users/users.component";
import { ListUserComponent } from "./user/list-user/list-user.component";

const routes: Routes = [
  // {path:'home', component: HomeComponent},
  {path:'users', component: UsersComponent,
    children:[
      {path:'', component: ListUserComponent},
      {path:':id/edit', component: EditUserComponent},
      {path:'add', component: AddComponent}
    ]
  },
  {path:'**', redirectTo: '/', pathMatch:'full' },
  {path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
