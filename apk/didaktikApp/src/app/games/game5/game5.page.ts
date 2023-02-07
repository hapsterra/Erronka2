import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-game5',
  templateUrl: './game5.page.html',
  styleUrls: ['./game5.page.scss']
})
export class Game5Page implements OnInit{
  hideEska=false;
  gif:string="../../assets/eskarabilera_full.gif";
   audioamaiera = new Audio('../../assets/amaiera.mp3');

  questions: any[] = [
    {
      text: 'Zein baldosa mota dago Basurin?',
      answers: [
        { text: 'Bilbokoa', correct: true },
        { text: 'Donostiakoa', correct: false },
        { text: 'Milanekoa', correct: false }
      ]
    },
    {
      text: 'Noiz dira Basauriko jaiak?',
      answers: [
        { text: 'Otsailean', correct: false },
        { text: 'Urrian', correct: true },
        { text: 'Uztailean', correct: false }
      ]
    },
    {
      text: 'Nola deitzen da udaletxe gaineko auzoa?',
      answers: [
        { text: 'Valdemingomez', correct: false },
        { text: '3000 etxebizitzak', correct: false },
        { text: 'Basoze', correct: true }
      ]
    }
  ];
  
  score: number = 0;
  question = 0;
  pregunta="";
  r1= "";
  r2= "";
  r3= "";
  correct = 0

  constructor(
  ) {}
  ngOnInit() {
    this.showQuestion()
  }
  showQuestion(){
    if (this.question<=2){
      let q = this.questions[this.question];

      this.pregunta = q.text;
      this.r1 = q.answers[0].text;
      this.r2 = q.answers[1].text;
      this.r3 = q.answers[2].text;
  
      if(q.answers[0].correct){
        this.correct = 1;
      }else if(q.answers[1].correct){
        this.correct = 2;
      }else if(q.answers[2].correct){
        this.correct = 3;
      }
  
      this.question++;
    }else{
      //fin();
      this.hideEska=true;
      this.audioamaiera.play()

    }
    
  }

  check1(){
    if (this.correct==1){
      this.score++;
    }
    this.showQuestion();
  }

  check2(){
    if (this.correct==2){
      this.score++;
    }
    this.showQuestion();
  }

  check3(){
    if (this.correct==3){
      this.score++;
    }
    this.showQuestion();
  }

}



