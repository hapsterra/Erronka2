import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaPage } from './mapa.page';

const routes: Routes = [
  {
    path: '',
    component: MapaPage
  },
  {
    path: 'game4',
    loadChildren: () =>
      import('../games/game4/game4.module').then((m) => m.Game4PageModule),
  },
  {
    path: 'game3',
    loadChildren: () =>
      import('../games/game3/game3.module').then((m) => m.Game3PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaPageRoutingModule {}
