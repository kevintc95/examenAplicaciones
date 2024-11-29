import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'validar-correo',
    loadChildren: () => import('./validar-correo/validar-correo.module').then( m => m.ValidarCorreoPageModule)
  },
  {
    path: '',
    redirectTo: 'validar-correo',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
