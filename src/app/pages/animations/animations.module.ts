import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AnimationsComponent } from './animations.component';
import { SharedModule } from '../../shared.module'

@NgModule({
  declarations: [AnimationsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AnimationsComponent,
        pathMatch: 'full',
      },
    ]),
  ],
})
export class AnimationsModule {}
