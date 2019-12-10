import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameControllerComponent implements OnInit {

  interval;
  numbers: number[] = [];
  gameNumber = 0;
  constructor() { }

  ngOnInit() {

  }

  onStartGame() {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.gameNumber++;
        this.numbers.push(this.gameNumber)
  
    }, 1000)
  }

  onPauseGame(){
    clearInterval(this.interval)
  }
  onResetGame(){
    clearInterval(this.interval)
    this.numbers = [];
    this.gameNumber = 0;
  }
}
