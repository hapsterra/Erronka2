import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.page.html',
  styleUrls: ['./game1.page.scss'],
})
export class Game1Page implements OnInit {
   rows = 3;
   hideEska=false;
   hideBut=true;
   bukatu=true;
   imgGif = document.getElementById('gif') as HTMLImageElement;
   columns = 3;
   tmp:any;
   gif:string="../../assets/eskarabilera_full.gif";

   imagenesP=["../../../assets/imgs/1.png","../../../assets/imgs/2.png","../../../assets/imgs/3.png","../../../assets/imgs/4.png","../../../assets/imgs/5.png","../../../assets/imgs/6.png","../../../assets/imgs/7.png","../../../assets/imgs/8.png","../../../assets/imgs/9.png"]
   imagenesB=["../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg"]
   currTile:any;
   otherTile:any;
   static numberTemp:any = [];

  constructor() { }
  static audioZor = new Audio('../../assets/zorionak.mp3');

  ngOnInit() {
   for (let r = 0; r < this.imagenesB.length; r++) {
      
          let tile = document.createElement("img");
          tile.src = "../../../assets/imgs/blank.jpg";
          tile.id="blank"+r
          
          //DRAG FUNCTIONALITY
          tile.addEventListener("dragstart", this.dragStart); //click on image to drag
          tile.addEventListener("dragover", this.dragOver);   //drag an image
          tile.addEventListener("dragenter", this.dragEnter); //dragging an image into another one
          tile.addEventListener("dragleave", this.dragLeave); //dragging an image away from another one
          tile.addEventListener("drop", this.dragDrop);       //drop an image onto another one
          tile.addEventListener("dragend", this.dragEnd);      //after you completed dragDrop
          document.getElementById("board").append(tile);
      
  }

   let pieces = [];
   for (let i=1; i <= this.rows*this.columns; i++) {
       pieces.push(i.toString()); //put "1" to "25" into the array (puzzle images names)
   }
   pieces.reverse();
   for (let i =0; i < pieces.length; i++) {
       let j = Math.floor(Math.random() * pieces.length);

       //swap
       let tmp = pieces[i];
       pieces[i] = pieces[j];
       pieces[j] = tmp;
   }

   for (let i = 0; i < pieces.length; i++) {
       let tile = document.createElement("img");
       tile.src = "../../../assets/imgs/" + pieces[i] + ".png";
      tile.id = "piece"+pieces[i];

       //DRAG FUNCTIONALITY
       tile.addEventListener("dragstart", this.dragStart); //click on image to drag
       tile.addEventListener("dragover", this.dragOver);   //drag an image
       tile.addEventListener("dragenter", this.dragEnter); //dragging an image into another one
       tile.addEventListener("dragleave", this.dragLeave); //dragging an image away from another one
       tile.addEventListener("drop", this.dragDrop);       //drop an image onto another one
       tile.addEventListener("dragend", this.dragEnd);      //after you completed dragDrop
       document.getElementById("pieces").append(tile);
   }
  }
  
 dragStart(e) {
   
  e.dataTransfer.setData("eserrece", e.target.src);
  e.dataTransfer.setData("id", e.target.id);

}

 dragOver(e) {
   e.preventDefault();
}

 dragEnter(e) {
   e.preventDefault();
}

 dragLeave() {

}

 dragDrop(e) {
   e.preventDefault();
   let eserrece= e.dataTransfer.getData("eserrece");
   let ide= e.dataTransfer.getData("id");
   let caerImg = e.target.id;
   let caerSrc=e.target.src;
   let caer= document.getElementById(caerImg) as HTMLImageElement;
   caer.src=eserrece;
   let id= document.getElementById(ide) as HTMLImageElement;
   id.src=caerSrc;
   
   let boardAr = [];
   var board = document.querySelectorAll('#board > img') as unknown as HTMLImageElement; // get all children within container
   //console.log(board);
   
   for(let a=0;a<9;a++){
      console.log(board[a].src);
      boardAr.push(board[a].src);
   }

   var temp=[];
   for(let a=0;a<boardAr.length;a++){
       temp.push(boardAr[a].substring(34,35));
      // console.log(boardAr[a]);
   }
   Game1Page.numberTemp=temp.map(function (value) {
      return isNaN(value) ? 0 : Number(value);
    });
}

zorionak(){
    console.log(Game1Page.numberTemp)

   this.bukatu=true;

   for (let i=0; i <Game1Page.numberTemp.length; i++) {
      //console.log(temp[i])
      var second_index=i+1
      if(Game1Page.numberTemp[second_index] - Game1Page.numberTemp[i] < 0) {   
         this.bukatu=false;}     
      
   }
   if(this.bukatu){   
  this.hideEska=true;
       this.hideBut=false;
   //alert("zorionak");
   Game1Page.audioZor.play();
   }
       
}

 dragEnd(e) {
    e.preventDefault();
}
}
