import { Component,signal,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { signal } from '../../../node_modules/@angular/core/types/_chrome_dev_tools_performance-chunk';

@Component({
  selector: 'app-get-apiexample',
  imports: [],
  templateUrl: './get-apiexample.html',
  styleUrl: './get-apiexample.css',
})
export class GetAPIexample implements OnInit {
usersData=signal<any[]>([]);
  //http2=inject(HttpClient); Introduction of inject function in angular 14

  constructor(private http: HttpClient) {
  }

  ngOnInit():void{
    this.getUserData();
  }
  getUserData() {
    debugger;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (result:any)=>this.usersData.set(result),
    )
  }
}
