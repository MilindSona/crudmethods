import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  getSum(...rest:number[]){
    let sum=0;
    for(let i=0;rest.length;i++){
    sum=sum+rest[i]
    }
    return sum;
  }
}
