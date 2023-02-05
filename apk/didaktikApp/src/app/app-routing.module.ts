import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'game1',
    loadChildren: () =>
      import('./games/game1/game1.module').then((m) => m.Game1PageModule),
  },
  {
    path: 'game2',
    loadChildren: () =>
      import('./games/game2/game2.module').then((m) => m.Game2PageModule),
  },
  {
    path: 'game3',
    loadChildren: () =>
      import('./games/game3/game3.module').then((m) => m.Game3PageModule),
  },
  {
    path: 'mapa',
    loadChildren: () =>
      import('./mapa/mapa.module').then((m) => m.MapaPageModule),
  },  {
    path: 'game4',
    loadChildren: () => import('./games/game4/game4.module').then( m => m.Game4PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
