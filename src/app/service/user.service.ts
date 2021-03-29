import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from "../model/user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {

// quy định kiểu trả về là json
public httpOptions = {
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
// tạo biến apiUrl lưu đường dẫn tạo mockapi
public apiUrl : string = 'https://6052c0a0fb49dc00175b88d9.mockapi.io/user';

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    // return this.http.get<User[]>(apiUrl).pipe();
    return this.http.get<User[]>(this.apiUrl);
  }
 
  getUserById(id : number) : Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  addUser(user : User) : Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }
  deleteUser(id: number) : Observable<User>{
    return this.http.delete<User>(`${this.apiUrl}/${id}`);
  }
  updateUser(user:User) : Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }
  
}