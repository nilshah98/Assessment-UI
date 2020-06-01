import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = '/api'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUrl(route){
    return `${BASE_URL}/${route}`;
  }

  getUserDetails() {
    return this.httpClient.get(this.getUrl("self"), {observe: 'response'});
  }

  logout(){
    return this.httpClient.post("/logout", null , {observe: 'response'});
  }

}
