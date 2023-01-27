import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.page.html',
  styleUrls: ['./game1.page.scss'],
})
export class Game1Page implements OnInit {
   rows = 3;
   columns = 3;
   tmp:any;
   imagenesP=["../../../assets/imgs/1.png","../../../assets/imgs/2.png","../../../assets/imgs/3.png","../../../assets/imgs/4.png","../../../assets/imgs/5.png","../../../assets/imgs/6.png","../../../assets/imgs/7.png","../../../assets/imgs/8.png","../../../assets/imgs/9.png"]
   imagenesB=["../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg","../../../assets/imgs/blank.jpg"]
    currTile:any;
 otherTile:any;
  constructor() { }

  ngOnInit() {
   for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
          //<img>
          let tile = document.createElement("img");
          tile.src = "../../../assets/imgs/blank.jpg";

          //DRAG FUNCTIONALITY
          tile.addEventListener("dragstart", this.dragStart); //click on image to drag
          tile.addEventListener("dragover", this.dragOver);   //drag an image
          tile.addEventListener("dragenter", this.dragEnter); //dragging an image into another one
          tile.addEventListener("dragleave", this.dragLeave); //dragging an image away from another one
          tile.addEventListener("drop", this.dragDrop);       //drop an image onto another one
          tile.addEventListener("dragend", this.dragEnd);      //after you completed dragDrop

          document.getElementById("board").append(tile);
      }
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
  
 dragStart() {
   this.currTile = this; //this refers to image that was clicked on for dragging
}

 dragOver(e) {
   e.preventDefault();
}

 dragEnter(e) {
   e.preventDefault();
}

 dragLeave() {

}

 dragDrop() {
   this.otherTile = this; //this refers to image that is being dropped on
}

 dragEnd() {
   if (this.currTile.src.includes("blank")) {
       return;
   }
   console.log(this.otherTile.src)
   let currImg = this.currTile.src;
   let otherImg = this.otherTile.src;
   this.currTile.src = otherImg;
   //this.otherTile.src = currImg;

}





}
