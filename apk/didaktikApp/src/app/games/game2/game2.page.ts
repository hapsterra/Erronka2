import { Component, ViewChild, Renderer2 } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.page.html',
  styleUrls: ['./game2.page.scss'],
})
export class Game2Page {
  @ViewChild('myCanvas') canvas: any;
  rows = 3;
  hideEska = false;
  imgGif = document.getElementById('gif') as HTMLImageElement;
  columns = 3;
  tmp: any;
  gif: string = '../../assets/eskarabilera_full.gif';

  canvasElement: any;
  lastX: number | undefined;
  lastY: number | undefined;

  currentColour: string = '#1abc9c';
  availableColours: any;
  brushSize: number = 10;

  constructor(public platform: Platform, public renderer: Renderer2) {
    console.log('Hello CanvasDraw Component');
    this.availableColours = [
      '#1abc9c',
      '#b3b1b1',
      '#d9a0b9',
      '#e67e22',
      '#ffffff',
    ];
  }
  static audioZor = new Audio('../../assets/zorionak.mp3');

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;

    this.renderer.setAttribute(
      this.canvasElement,
      'width',
      this.platform.width() + ''
    );
    this.renderer.setAttribute(
      this.canvasElement,
      'height',
      this.platform.height() + ''
    );
  }

  changeColour(colour: string) {
    this.currentColour = colour;
  }
  changeSize(size: number) {
    this.brushSize = size;
  }
  handleStart(ev: any) {
    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }
  handleMove(ev: any) {
    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX;
    let currentY = ev.touches[0].pageY;
    ctx.beginPath();
    ctx.lineJoin = 'round';
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColour;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();
    this.lastX = currentX;
    this.lastY = currentY;
  }
  clearCanvas() {
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }
  zorionak() {
    this.hideEska = true;
    alert('zorionak');
    Game2Page.audioZor.play();
  }
}
