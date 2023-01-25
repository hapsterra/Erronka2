import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  listOfMarkers = [
    {
      lat: 41.1533,
      lng: 20.1683,
      link: 'https://medium.com/',
      icon: '../../assets/icon/pointer.png',
    },
    {
      lat: 41.4233,
      lng: 20.2683,
      link: 'https://github.com/',
      icon: '../../assets/icon/pointer.png',
    },
    {
      lat: 41.1833,
      lng: 20.5083,
      link: 'https://stackoverflow.com/',
      icon: '../../assets/icon/pointer.png',
    },
  ];
  constructor() {}

  static audio = new Audio('../../assets/hasi.mp3');

  hideButton=false;
  hideEska=false;
   gif:string="../../assets/eskarabilera_full.gif";
   static interval:any;
  leafletMap: any;
  lat: number = 43.23773675894636;
  lng: number = -2.889767201301909;
  zoom: number = 20;
  
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
    this.leafletMap.dragging.disable();
    this.leafletMap.touchZoom.disable();
    this.leafletMap.doubleClickZoom.disable();
    this.leafletMap.scrollWheelZoom.disable();
    this.leafletMap.boxZoom.disable();
    this.leafletMap.keyboard.disable();
    if (this.leafletMap.tap) this.leafletMap.tap.disable();
    
    let icon1 = L.icon({
      iconUrl: 'marker-icon.png',
      iconSize: [30, 40],
    });
    let marker = L.marker([43.23773675894636, -2.889767201301909], {
      icon: icon1,
    })
      .on(
        'click',
        (izena) => {
          this.lekuaInfo();
        },
        this
      )
      .addTo(this.leafletMap);
      
    let popup = L.popup().setContent('<h1>Eskarabilera</h1>');
    
    marker.bindPopup(popup);
    
  }

  lekuaInfo() {
    alert('elpepe');
  }

  hasi(){
    
    this.hideButton = false;
    this.leafletMap.dragging.enable();
    this.leafletMap.touchZoom.enable();
    this.leafletMap.doubleClickZoom.enable();
    this.leafletMap.scrollWheelZoom.enable();
    this.leafletMap.boxZoom.enable();
    this.leafletMap.keyboard.enable();
    this.hideEska=true;
    HomePage.audio.play();
    HomePage.interval= setInterval(this.isPlaying,1000);
        
        
  }
  isPlaying(){
    if(HomePage.audio.paused){
      this.gif="../../assets/eskarabilera(concesta).png"
      clearInterval(HomePage.interval);
      
    }
  }


  ngOnInit(): void {
    this.hideButton=true;
    this.loadLeafletMap();
  }
}
