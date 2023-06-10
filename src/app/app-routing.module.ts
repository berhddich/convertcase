import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConvertComponent } from './convert/convert.component';
import { VoakFoncComponent } from './voak-fonc/voak-fonc.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'convert',
    loadChildren: () =>
      import('./convert/convert.module').then((m) => m.ConvertModule),

  },
  {
    path: 'voka',
    component: VoakFoncComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
