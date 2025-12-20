import { Component ,signal} from '@angular/core';

@Component({
  selector: 'app-basicsignal',
  imports: [],
  templateUrl: './basicsignal.html',
  styleUrl: './basicsignal.css',
})
export class Basicsignal {

  productName=signal<string>('Laptop');
studentObj=signal<any>({id:101,name:'John',age:23});
  constructor(){
    setTimeout(()=>{
this.productName.set('Smartphone');
    },3000)
  }
}
