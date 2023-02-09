import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {


  constructor(private router:Router) {}

  static audioZurra = new Audio('../../assets/ZURRAKAPOTEA.mp3');
  static audioAstoak = new Audio('../../assets/LOS-BURROS.mp3');
  static audioMarien = new Audio('../../assets/MARIENEA.mp3');
  static audioSanfaust = new Audio('../../assets/SAN-FAUSTO.mp3');
  static audioAriz = new Audio('../../assets/ARIZKO-DORRETXEA.mp3');



   jif = document.getElementById('gif');
  hideButton=false;
  hideEska=false;
   gif:string="../../assets/eskarabilera_full.gif";
   static interval:any;
  leafletMap: any;
  lat: number = 43.23773675894636;
  lng: number = -2.889767201301909;
  zoom: number = 16;
  
  loadLeafletMap() {
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

    let marker1 = L.marker([43.23773675894636, -2.889767201301909], { icon: icon1 }).on('click', () => { this.lekuaMarker1()}, this).addTo(
      this.leafletMap      
    );
    var content1 = L.DomUtil.create('div','content1'),popup1 = L.popup().setContent(content1);
    content1.innerHTML = "            <img  id='gif' src='../../assets/zurra.jpg'/>  <br><br>  <h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>Zurrakapotea</h3>";
    L.DomEvent.addListener(content1, 'click', () => {
      this.router.navigateByUrl('game3');      this.hideEska=false;
      this.stopAudios()


    });

      
        let marker2 = L.marker([43.23775412976203, -2.8939684222712314], { icon: icon1 }).on('click', () => { this.lekuaMarker2()}, this).addTo(
          this.leafletMap      
        );
        var content2 = L.DomUtil.create('div','content2'),popup2 = L.popup().setContent(content2);
    content2.innerHTML = "<img  id='burros' src='../../assets/burros.jpg'/>  <br><br> <h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Astoak &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>";
    L.DomEvent.addListener(content2, 'click', () => {
      this.router.navigateByUrl('game2');      
      this.hideEska=false;
      this.stopAudios()

    });


    let marker3 = L.marker([43.23411862816688, -2.8922257730479246], { icon: icon1 }).on('click', () => { this.lekuaMarker3()}, this).addTo(
      this.leafletMap      
    );
    var content3 = L.DomUtil.create('div','content3'),popup3 = L.popup().setContent(content3);
    content3.innerHTML = "<img   src='../../assets/marienea.jpg'/>  <br><br><h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>Marienea eraikina</h3>";
    L.DomEvent.addListener(content3, 'click', () => {
      this.router.navigateByUrl('game1');      
      this.hideEska=false;
      this.stopAudios()

    });

    let marker4 = L.marker([43.23578635651078, -2.889453615374651], { icon: icon1 }).on('click', () => { this.lekuaMarker4()}, this).addTo(
      this.leafletMap      
    );
    var content4 = L.DomUtil.create('div','content4'),popup4 = L.popup().setContent(content4);
    content4.innerHTML = "<img   src='../../assets/sanfausto.jpeg'/>  <br><br><h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>San faustoko plaza</h3>";
    L.DomEvent.addListener(content4, 'click', () => {
      this.router.navigateByUrl('game4');      
      this.hideEska=false;
      this.stopAudios()

    });

    let marker5 = L.marker([43.23724169834896, -2.88073205955769], { icon: icon1 }).on('click', () => { this.lekuaMarker5()}, this).addTo(
      this.leafletMap      
    );
    var content5 = L.DomUtil.create('div','content5'),popup5 = L.popup().setContent(content5);
    content5.innerHTML = "<img   src='../../assets/ariz.jpg'/>  <br><br><h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>Arizko dorretxea</h3>";
    L.DomEvent.addListener(content5, 'click', () => {
      this.hideEska=false;
      this.stopAudios()
      this.router.navigateByUrl('game5');
    });

    marker1.bindPopup(popup1);
    marker2.bindPopup(popup2);
    marker3.bindPopup(popup3);
    marker4.bindPopup(popup4);
    marker5.bindPopup(popup5);
  }

  stopAudios(){
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
  }

  lekuaMarker1() {
  MapaPage.audioZurra.play();
  this.hideEska=true;
  }

  timer(){
    this.hideEska=false;
  }

  lekuaMarker2() {  
  MapaPage.audioAstoak.play();
  this.hideEska=true;
  }
  lekuaMarker3() {
  MapaPage.audioMarien.play();
  this.hideEska=true;
  }
  lekuaMarker4() {
    
    MapaPage.audioSanfaust.play();
  this.hideEska=true;
  }
  lekuaMarker5() {
    
    MapaPage.audioAriz.play();
  this.hideEska=true;
  }
  ngOnInit(): void {
    this.hideButton=true;
    this.loadLeafletMap();
  }
}
