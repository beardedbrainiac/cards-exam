import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  public count: number = 4;
  public cards: number[] = [];
  public currentCardNumber: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.generateCards();
  }

  public generateCards() {
    this.cards = [];
    for (let index = 1; index <= this.count; index++) {
      this.cards.push(index);
    }
  }

  public currentCard(cardNumber: number) {
    this.currentCardNumber = cardNumber;
  }

  public onChange(event: any) {
    this.count = event.target.value;
    this.generateCards();
  }

}
