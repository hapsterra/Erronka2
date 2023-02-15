import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { Koordenadak } from '../interfaces/koordenadak';
import { KoordenadakService } from '../services/koordenadak.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {


  constructor(private koordenadakService: KoordenadakService,private router:Router) {}

  static audioZurra = new Audio('../../assets/ZURRAKAPOTEA.mp3');
  static audioAstoak = new Audio('../../assets/LOS-BURROS.mp3');
  static audioMarien = new Audio('../../assets/MARIENEA.mp3');
  static audioSanfaust = new Audio('../../assets/SAN-FAUSTO.mp3');
  static audioAriz = new Audio('../../assets/ARIZKO-DORRETXEA.mp3');
  koordenadak: Koordenadak[] = [];
   jif = document.getElementById('gif');
  hideButton=false;
  hideEska=false;
   gif:string="../../assets/eskarabilera_full.gif";
   static interval:any;
  leafletMap: any;
  lat: number = 43.23773675894636;
  lng: number = -2.889767201301909;
  zoom: number = 16;
  refresh = false;

  loadLeafletMap() {
    this.koordenadakService.getKoordenadak(this.refresh).subscribe(data => {this.koordenadak = data; 
      
    this.leafletMap = new L.Map('leafletMap');

    const self = this;

    this.leafletMap.on('load', function () {
      setTimeout(() => {
        self.leafletMap.invalidateSize();
      }, 10);
    });

    this.leafletMap.setView([this.lat, this.lng], this.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.leafletMap);
   
    
    let icon1 = L.icon({
      iconUrl: 'marker-icon.png',
      iconSize: [30, 40],
    });

    this.koordenadakService.getKoordenadak(this.refresh).subscribe(data => {this.koordenadak = data; },
      error => console.log('Error::' + error));

    let marker1 = L.marker([+this.koordenadak[0].lat, +this.koordenadak[0].lng], { icon: icon1 }).on('click', () => { this.lekuaMarker1()}, this).addTo(
      this.leafletMap      
    );
    var content1 = L.DomUtil.create('div','content1'),popup1 = L.popup().setContent(content1);
    content1.innerHTML = "            <img  id='gif' src='../../assets/zurra.jpg'/>  <br><br>  <h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>Zurrakapotea</h3>";
    L.DomEvent.addListener(content1, 'click', () => {
      this.router.navigateByUrl('game3');      this.hideEska=false;
      this.stopAudios(6)


    });

      
        let marker2 = L.marker([+this.koordenadak[1].lat, +this.koordenadak[1].lng], { icon: icon1 }).on('click', () => { this.lekuaMarker2()}, this).addTo(
          this.leafletMap      
        );
        var content2 = L.DomUtil.create('div','content2'),popup2 = L.popup().setContent(content2);
    content2.innerHTML = "<img  id='burros' src='../../assets/burros.jpg'/>  <br><br> <h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Astoak &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>";
    L.DomEvent.addListener(content2, 'click', () => {
      this.router.navigateByUrl('game2');      
      this.hideEska=false;
      this.stopAudios(6)

    });


    let marker3 = L.marker([+this.koordenadak[2].lat, +this.koordenadak[2].lng], { icon: icon1 }).on('click', () => { this.lekuaMarker3()}, this).addTo(
      this.leafletMap      
    );
    var content3 = L.DomUtil.create('div','content3'),popup3 = L.popup().setContent(content3);
    content3.innerHTML = "<img   src='../../assets/marienea.jpg'/>  <br><br><h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>Marienea eraikina</h3>";
    L.DomEvent.addListener(content3, 'click', () => {
      this.router.navigateByUrl('game1');      
      this.hideEska=false;
      this.stopAudios(6)

    });

    let marker4 = L.marker([+this.koordenadak[3].lat, +this.koordenadak[3].lng], { icon: icon1 }).on('click', () => { this.lekuaMarker4()}, this).addTo(
      this.leafletMap      
    );
    var content4 = L.DomUtil.create('div','content4'),popup4 = L.popup().setContent(content4);
    content4.innerHTML = "<img   src='../../assets/sanfausto.jpeg'/>  <br><br><h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>San faustoko plaza</h3>";
    L.DomEvent.addListener(content4, 'click', () => {
      this.router.navigateByUrl('game4');      
      this.hideEska=false;
      this.stopAudios(6)

    });

    let marker5 = L.marker([+this.koordenadak[4].lat, +this.koordenadak[4].lng], { icon: icon1 }).on('click', () => { this.lekuaMarker5()}, this).addTo(
      this.leafletMap      
    );
    var content5 = L.DomUtil.create('div','content5'),popup5 = L.popup().setContent(content5);
    content5.innerHTML = "<img   src='../../assets/ariz.jpg'/>  <br><br><h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>Arizko dorretxea</h3>";
    L.DomEvent.addListener(content5, 'click', () => {
      this.hideEska=false;
      this.stopAudios(6)
      this.router.navigateByUrl('game5');
    });


    
    marker1.bindPopup(popup1);
    marker2.bindPopup(popup2);
    marker3.bindPopup(popup3);
    marker4.bindPopup(popup4);
    marker5.bindPopup(popup5);
  },
      error => console.log('Error::' + error));
  }

  stopAudios(audi:number){
    switch (audi) {
      case 1:

      MapaPage.audioAstoak.pause();
      MapaPage.audioAstoak.currentTime=0;
  
      MapaPage.audioMarien.pause();
      MapaPage.audioMarien.currentTime=0;
  
      MapaPage.audioSanfaust.pause();
      MapaPage.audioSanfaust.currentTime=0;
      
      MapaPage.audioAriz.pause();
      MapaPage.audioAriz.currentTime=0;
      break;
      case 2:
        MapaPage.audioZurra.pause();
    MapaPage.audioZurra.currentTime=0;
    MapaPage.audioMarien.pause();
    MapaPage.audioMarien.currentTime=0;

    MapaPage.audioSanfaust.pause();
    MapaPage.audioSanfaust.currentTime=0;
    
    MapaPage.audioAriz.pause();
    MapaPage.audioAriz.currentTime=0;
    break;
      case 3:
        MapaPage.audioZurra.pause();
    MapaPage.audioZurra.currentTime=0;

    MapaPage.audioAstoak.pause();
    MapaPage.audioAstoak.currentTime=0;
    MapaPage.audioSanfaust.pause();
    MapaPage.audioSanfaust.currentTime=0;
    
    MapaPage.audioAriz.pause();
    MapaPage.audioAriz.currentTime=0;
    break;
    case 4:
      MapaPage.audioZurra.pause();
      MapaPage.audioZurra.currentTime=0;
  
      MapaPage.audioAstoak.pause();
      MapaPage.audioAstoak.currentTime=0;
  
      MapaPage.audioMarien.pause();
      MapaPage.audioMarien.currentTime=0;
      MapaPage.audioAriz.pause();
    MapaPage.audioAriz.currentTime=0;
    
        break;
        case 5:
          MapaPage.audioZurra.pause();
    MapaPage.audioZurra.currentTime=0;

    MapaPage.audioAstoak.pause();
    MapaPage.audioAstoak.currentTime=0;

    MapaPage.audioMarien.pause();
    MapaPage.audioMarien.currentTime=0;

    MapaPage.audioSanfaust.pause();
    MapaPage.audioSanfaust.currentTime=0;
          break;
        case 6:
          MapaPage.audioZurra.pause();
    MapaPage.audioZurra.currentTime=0;

    MapaPage.audioAstoak.pause();
    MapaPage.audioAstoak.currentTime=0;

    MapaPage.audioMarien.pause();
    MapaPage.audioMarien.currentTime=0;

    MapaPage.audioSanfaust.pause();
    MapaPage.audioSanfaust.currentTime=0;
    
    MapaPage.audioAriz.pause();
    MapaPage.audioAriz.currentTime=0;
    break;
      default:

    }
   
  }

  lekuaMarker1() {
    this.stopAudios(1);
  MapaPage.audioZurra.play();
  this.hideEska=true;
  }

  timer(){
    this.hideEska=false;
  }

  lekuaMarker2() {  
    this.stopAudios(2);

  MapaPage.audioAstoak.play();
  this.hideEska=true;
  }
  lekuaMarker3() {
    this.stopAudios(3);

  MapaPage.audioMarien.play();
  this.hideEska=true;
  }
  lekuaMarker4() {
    this.stopAudios(4);

    MapaPage.audioSanfaust.play();
  this.hideEska=true;
  }
  lekuaMarker5() {
    this.stopAudios(5);

    MapaPage.audioAriz.play();
  this.hideEska=true;
  }
  ngOnInit(): void {
    this.hideButton=true;
    this.loadLeafletMap();
  }
}
