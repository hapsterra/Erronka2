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

  static audio = new Audio('../../assets/hasi.mp3');

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

    let marker1 = L.marker([43.23773675894636, -2.889767201301909], { icon: icon1 }).addTo(
      this.leafletMap      
    );
    var content1 = L.DomUtil.create('div','content1'),popup1 = L.popup().setContent(content1);
    content1.innerHTML = "<h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>Zurrakapotea</h3>";
    L.DomEvent.addListener(content1, 'click', () => {
      this.router.navigateByUrl('game3');
    });
     
      
        let marker2 = L.marker([43.23775412976203, -2.8939684222712314], { icon: icon1 }).addTo(
          this.leafletMap      
        );
        var content2 = L.DomUtil.create('div','content2'),popup2 = L.popup().setContent(content2);
    content2.innerHTML = "<h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>Astoak</h3>";
    L.DomEvent.addListener(content2, 'click', () => {
      this.router.navigateByUrl('game2');
    });


    let marker3 = L.marker([43.23411862816688, -2.8922257730479246], { icon: icon1 }).addTo(
      this.leafletMap      
    );
    var content3 = L.DomUtil.create('div','content3'),popup3 = L.popup().setContent(content3);
    content3.innerHTML = "<h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>Marienea eraikina</h3>";
    L.DomEvent.addListener(content3, 'click', () => {
      this.router.navigateByUrl('game3');
    });

    let marker4 = L.marker([43.23578635651078, -2.889453615374651], { icon: icon1 }).addTo(
      this.leafletMap      
    );
    var content4 = L.DomUtil.create('div','content4'),popup4 = L.popup().setContent(content4);
    content4.innerHTML = "<h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>San faustoko jaiak</h3>";
    L.DomEvent.addListener(content4, 'click', () => {
      this.router.navigateByUrl('game4');
    });

    let marker5 = L.marker([43.23724169834896, -2.88073205955769], { icon: icon1 }).addTo(
      this.leafletMap      
    );
    var content5 = L.DomUtil.create('div','content5'),popup5 = L.popup().setContent(content5);
    content5.innerHTML = "<h3 style='margin:-10px; font-weight:bold; color:#346eeb;'>San faustoko jaiak</h3>";
    L.DomEvent.addListener(content5, 'click', () => {
      this.router.navigateByUrl('game5');
    });

    marker1.bindPopup(popup1);
    marker2.bindPopup(popup2);
    marker3.bindPopup(popup3);
    marker4.bindPopup(popup4);
    marker5.bindPopup(popup5);


  }

  lekuaInfo() {
    
  }

  ngOnInit(): void {
    this.hideButton=true;
    this.loadLeafletMap();
  }
}
