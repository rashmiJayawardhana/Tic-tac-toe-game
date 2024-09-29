import { Component, OnInit } from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [SquareComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit{
  constructor(public gameService: GameService){}

  ngOnInit(): void {
    
  }



}
