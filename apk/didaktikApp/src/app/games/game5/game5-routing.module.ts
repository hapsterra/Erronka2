import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Game5Page } from './game5.page';

const routes: Routes = [
  {
    path: '',
    component: Game5Page
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../../home/home.module').then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Game5PageRoutingModule {}
