import { Component, computed, effect, linkedSignal, signal, untracked, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-advance',
  imports: [],
  templateUrl: './signal-advance.html',
  styleUrl: './signal-advance.css',
})
export class SignalAdvance {

  courseName: WritableSignal<string> = signal<string>("angular")
  courseDuration: WritableSignal<string> = signal<string>("2months");


  //You cant change the value of computed signal !!!!!
  //It get chnaged based on other signals

  courseDetails = computed(() => "Course name:" + this.courseName() + "course Duration:" + this.courseDuration())

  // when we need when oneof the value changes othe also get change 
  // we can achieve this in signal using computed signal 

  fName = signal<string>("Milind");
  lName = signal<string>("Sonawane");
  fullName = linkedSignal(() => untracked(this.fName) + this.lName)

  constructor() {
    setTimeout(() => {
      this.courseName.set("React js");
      //this.courseDuration.set("3monts")
    }, 2000);

    setTimeout(() => {
      this.courseName.set("React js");
      //this.courseDuration.set("3monts")
      this.count.set(20)
    }, 2000)
    effect(() => {
      alert( this.count());
    });
  }

  count = signal(0);


}

//computed() creates reactive values
//untracked() escapes reactivity