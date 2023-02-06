import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game4',
  templateUrl: './game4.page.html',
  styleUrls: ['./game4.page.scss'],
})
export class Game4Page implements OnInit {
  myScriptElement: HTMLScriptElement;
  gif:string="../../assets/eskarabilera_full.gif";

  constructor() {
    this.myScriptElement = document.createElement("script");      
    this.myScriptElement.src = "../../../assets/maze.js";
          document.body.appendChild(this.myScriptElement);
   }

  ngOnInit() {
  }

}
