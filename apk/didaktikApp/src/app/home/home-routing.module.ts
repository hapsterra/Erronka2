import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }, 
  {
    path: 'game1',
    loadChildren: () => import('../games/game1/game1-routing.module').then(m =>
    m.Game1PageRoutingModule)
    },
    {
    path: 'game2',
    loadChildren: () => import('../games/game2/game2-routing.module').then(m =>
    m.Game2PageRoutingModule)
    },
    {
      path: 'game3',
      loadChildren: () => import('../games/game3/game3-routing.module').then(m =>
      m.Game3PageRoutingModule)
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
