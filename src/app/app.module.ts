import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UsersComponent } from './user/users/users.component';
import { AddComponent } from './user/add/add.component';
import { UserService } from "./service/user.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditUserComponent,
    UsersComponent,
    AddComponent,
    ListUserComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
