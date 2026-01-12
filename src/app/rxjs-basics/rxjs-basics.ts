import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { from, interval, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-basics',
  imports: [AsyncPipe],
  templateUrl: './rxjs-basics.html',
  styleUrl: './rxjs-basics.css',
})
export class RxjsBasics {

  // new Promise(resolve,reject)
//1. Unicast observables below are

//Unicast Observable (default behavior) cold observables
//What it means
//One producer → one consumer
//Each subscribe() call gets its own independent execution.
//Cold → starts on subscribe
//Hot → already producing

  $obs1 = new Observable<string>(data => {
    data.next("angular b32 batch")
  });

  $timer=interval(2000);

  //$cityList=of(["pune","mumbai","Nagoa"])
  // all the data at one time 

   $cityList=from(["pune","mumbai","Nagoa"])
   //one by one data like for loop

//2 multicast observables 
//2.1 Subject is speacil type of Observable 

$loggedUserName:Subject<string>=new Subject<string>;


  constructor() {
    // Observable is way of storing data in reative way 

    //Satellite example 
    // every antena user will get data 
    this.$obs1.subscribe(val => {
      console.log(val)
    });

    this.$obs1.subscribe(batch => {
      console.log(batch)
    });

    //this.$timer.subscribe(time=>console.log(time));

    this.$cityList.pipe().subscribe(city=>console.log(city));

    this.$loggedUserName.subscribe(res=>{console.log(res)})
    this.$loggedUserName.next("Milind")
    
  }

  //Short answer (intuition)

//Because Subject does NOT store values.
//It only pushes values to current listeners.
//subscribe() → you join the meeting
//next() → someone speaks into the mic

}
