import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomermasterService {
http=inject(HttpClient)
  constructor() { }

  getAllCustomerList(){
    return this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers')
  }
}
