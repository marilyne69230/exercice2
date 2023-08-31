import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent implements OnInit {
  title: string = 'exercice2';
  phrase: string = "Vous n'êtes pas polie";
  num1: number = 1;
  num2: number = 5;
  result: number = this.num1 + this.num2;

  ngOnInit(): void {
    alert("Bonjour");
    console.log(this.phrase);
    console.log(this.result);
  }
  
}
