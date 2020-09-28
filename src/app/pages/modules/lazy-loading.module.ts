import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { AboutComponent } from './__about/about.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [AboutComponent, ModulesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModulesComponent,
        children: [
          {
            path: 'about',
            component: AboutComponent,
          },
        ],
      },
    ]),
  ],
})
export class LazyLoadingModule {}
