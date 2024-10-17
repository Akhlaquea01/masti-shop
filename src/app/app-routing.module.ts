import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './admin/auth.guard'; // Ensure you have the AuthGuard imported

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '', redirectTo: 'customer/home', pathMatch: 'full' }, // Default to customer home
  { path: '**', redirectTo: 'customer/home' }, // Handle unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
