import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardNumber: number;
  @Input() currentCardNumber: number;
  @Output() currentCard: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.cardNumber = 0;
    this.currentCardNumber = 0;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.currentCard.emit(this.cardNumber);
  }

}
