import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { Platform, ToastController } from '@ionic/angular';
import { Base64ToGallery, Base64ToGalleryOptions } from '@ionic-native/base64-to-gallery/ngx';

@Component({
  selector: 'app-game1',
  templateUrl: 'game1.page.html',
  styleUrls: ['game1.page.scss'],
})
export class Game1Page implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

}
