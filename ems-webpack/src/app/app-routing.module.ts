import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)  },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)  },
  { path: 'clientes', loadChildren: () => import('./components/clientes/clientes.module').then(m => m.ClientesModule)  },
  { path: 'casos', loadChildren: () => import('./components/casos/casos.module').then(m => m.CasosModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
