import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-cell',
  styleUrls: ['./game-controller.component.scss'],
  template: `<p> {{even}} </p>`,
})
export class EvenCellComponent implements OnInit {

    @Input() even: number;
  constructor() { }

  ngOnInit() {
  }

}