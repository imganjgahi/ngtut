import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-cell',
  styleUrls: ['./game-controller.component.scss'],
  template: `<p> {{odd}} </p>`,
})
export class OddCellComponent implements OnInit {

    @Input() odd: number;
  constructor() { }

  ngOnInit() {
  }

}
