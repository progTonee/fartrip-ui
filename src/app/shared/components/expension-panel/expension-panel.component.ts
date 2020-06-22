import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expension-panel',
  templateUrl: './expension-panel.component.html',
  styleUrls: ['./expension-panel.component.scss']
})
export class ExpensionPanelComponent implements OnInit {

  @Input() data: any[];
  @Input() type: string;

  constructor() { }

  ngOnInit() {}

}
