import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: any[];
  @Input() type: string;

  @Output()loadMoreOrders: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  showMoreOrders(type: string): void {
    if (type === 'orders-history') {
      this.loadMoreOrders.emit();
    }
  }

}
