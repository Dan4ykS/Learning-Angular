import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './pages/forms/forms.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostComponent } from './pages/post/post.component';
import { WorkWithServerComponent } from './pages/work-with-server/work-with-server.component';
import { AuthGuard } from './services/auth.guard';
import { PostResolver } from './services/post.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'server',
    component: WorkWithServerComponent,
  },
  {
    path: 'server/post/:id',
    component: PostComponent,
    canActivate: [AuthGuard],
    resolve: {
      post: PostResolver,
    },
  },
  {
    path: 'modules',
    loadChildren: () =>
      import('./pages/modules/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      ),
  },
  {
    path: 'animations',
    loadChildren: () => import('./pages/animations/animations.module').then(m => m.AnimationsModule)
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
