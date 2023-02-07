import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Game4Page } from './game4.page';

const routes: Routes = [
  {
    path: '',
    component: Game4Page
  }, {
    path: 'mapa',
    loadChildren: () => import('../../mapa/mapa-routing.module').then(m =>m.MapaPageRoutingModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Game4PageRoutingModule {}
