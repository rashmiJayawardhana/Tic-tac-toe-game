import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent implements OnInit{
  constructor(public gameService: GameService){}

  @Input() square: any;

  ngOnInit(): void {    
  }

  changePlayer(){
    this.gameService.isGameRunning=true;

    if(this.gameService.isGameRunning && this.square.state === null){
      this.square.state = this.gameService.activePlayer;
      this.gameService.changePlayerTurn(this.square);
    }
  }

  

}
