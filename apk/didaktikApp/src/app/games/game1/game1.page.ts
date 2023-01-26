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

 

   
  }
  

 touchMove(e:any) {
    document.getElementById(e.target.id).style.marginLeft=e.offsetX+"px" ;
    document.getElementById(e.target.id).style.marginTop=e.offsetY+"px";

    console.log(document.getElementById(e.target.id));
}

}
