import { Component, OnInit } from '@angular/core';

import { boxAnimation } from './animations';
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [boxAnimation],
})
export class AnimationsComponent implements OnInit {
  animationState: 'start' | 'end' | 'special' = 'start';

  constructor() {}

  ngOnInit(): void {}

  animated() {
    this.animationState = this.animationState === 'start' ? 'end' : 'start';
  }

  specialAnimated() {
    this.animationState =
      this.animationState === 'start' || this.animationState === 'end'
        ? 'special'
        : 'start';
  }
}
