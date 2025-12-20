import { Component, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busvendor',
  imports: [FormsModule],
  templateUrl: './busvendor.html'
})
export class Busvendor implements OnInit {

  customersList = signal<any[]>([]);
  newCustomerObj: any = {
    userId: 0,
    userName: "",
    emailId: "",
    fullName: "",
    role: "",
    createdDate: new Date(),
    password: "",
    projectName: "",
    refreshToken: "",
    refreshTokenExpiryTime: new Date()
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsersData();
  }
  getUsersData() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers').subscribe(
      {
        next: (result: any) => this.customersList.set(result.data)
      }
    )
  }
  addNewCustomer() {
    if (!this.newCustomerObj.userName?.trim() || !this.newCustomerObj.emailId?.trim() || !this.newCustomerObj.password?.trim()) {
      alert('Please enter Customer Name, Email and Password');
      return;
    }

    this.http.post('https://api.freeprojectapi.com/api/BusBooking/AddNewUser', this.newCustomerObj).subscribe({
      next: (res: any) => {
        console.log('Add customer response:', res);
        alert('Customer added successfully ✅');
        // reset form
        this.newCustomerObj = {
          userId: 0,
          userName: "",
          fullName: "",
          emailId: "",
          role: "",
          createdDate:"",
          password: "",
          projectName: "",
          refreshToken: "",
          refreshTokenExpiryTime: ""
        };
        this.getUsersData();
      },
      error: (error: any) => {
        console.error('Add customer error:', error);
        const errMsg = error?.error?.message || error?.message || 'Unknown error from server';
        alert('Failed to add customer: ' + errMsg);
      }
    });

  }
  clearFormData() {
    this.newCustomerObj = {
      userId: 0,
      userName: "",
      fullName: "",
      emailId: "",
      role: "",
      createdDate: "",
      password: "",
      projectName: "",
      refreshToken: "",
      refreshTokenExpiryTime: ""
    };
  }

  onEditCustomer(data: any) {
    this.newCustomerObj = data;
  }
  updateCustomer() {
    this.http.post('https://api.freeprojectapi.com/api/BusBooking/UpdateUser', this.newCustomerObj).subscribe({
      next: (res: any) => {
        console.log('Update customer response:', res);
        alert('Customer updated successfully ✅');
        // reset form
        this.newCustomerObj = {
          userId: 0,
          userName: "",
          fullName: "",
          emailId: "",
          role: "",
          createdDate: new Date(),
          password: "",
          projectName: "",
          refreshToken: "",
          refreshTokenExpiryTime: new Date()
        };
        this.getUsersData();
      },
      error: (error: any) => {
        const errMsg = error?.error?.message || error?.message || 'Unknown error from server';
        alert('Failed to update customer: ' + errMsg);
      }
    });
  }
 deleteCustomer(id: number) {
    this.http.delete('https://api.freeprojectapi.com/api/BusBooking/DeleteUserByUserId?userId='+id).subscribe({
      next: (res: any) => {
        debugger;
        alert('Customer deleted successfully');
        this.getUsersData();
      },
      error: (error: any) => {
        const errMsg = error?.error?.message || error?.message || 'Unknown error from server';
        alert('Failed to delete customer: ' + errMsg);
      }
    });
  }
}

