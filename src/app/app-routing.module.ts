import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './admin/auth.guard'; // Ensure you have the AuthGuard imported

const routes: Routes = [
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' }, // Redirect to admin login by default
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), // Lazy load the Admin Module
  },
  { path: '**', redirectTo: 'admin/login' }, // Handle 404s by redirecting to the login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
