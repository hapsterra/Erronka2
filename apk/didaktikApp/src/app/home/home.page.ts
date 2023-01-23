import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

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
    link: "https://medium.com/",
    icon: "../../assets/icon/pointer.png"
    },
    {
    lat: 41.4233,
    lng: 20.2683,
    link: "https://github.com/",
    icon: "../../assets/icon/pointer.png"
    },
    {
    lat: 41.1833,
    lng: 20.5083,
    link: "https://stackoverflow.com/",
    icon: "../../assets/icon/pointer.png"
    },
    ];
  constructor() {}
  leafletMap: any;
  lat: number = 41.1533;
  lng: number = 20.1683;
  zoom: number = 8;
  loadLeafletMap() {
    this.leafletMap = new L.Map('leafletMap');
    const self = this;
    this.leafletMap.on('load', function () {
      setTimeout(() => {
        self.leafletMap.invalidateSize();
      }, 10);
    });
    let icon = L.icon({
      iconUrl: '../../assets/icon/pointer.png',
      iconSize: [30, 40],
      });
      let marker = L.marker([this.lat, this.lng], {
      icon: icon,
      }).addTo(this.leafletMap);
      let popup = L.popup().setContent('<h1>Do not click me</h1>');
      marker.bindPopup(popup);
    this.leafletMap.setView([this.lat, this.lng], this.zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.leafletMap);
  }
  
  ngOnInit(): void {
    this.loadLeafletMap();
  }
}
