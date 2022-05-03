import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/page/home/home/home.module').then(module => module.HomeModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/page/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/page/customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'store',
    loadChildren: () => import('../app/page/store/store.module').then(module => module.StoreModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/page/admin/admin.module').then(module => module.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
