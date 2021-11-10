import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: UserComponent,
    path: 'User/:id'
  },
  {
    component: AboutComponent,
    path: 'About',
    children: [
      {
        component: AboutCompanyComponent,
        path: 'Company',
      },
      {
        component: AboutMeComponent,
        path: 'Me',
      },
    ],
  },
  {
    component: UserComponent,
    path: 'Users'
  },
  {
    component: Error404PageComponent,
    path: '**'
  },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
  },
  {
    path: "employee",
    loadChildren: () => import('./employee/employee.module').then(mod => mod.EmployeeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
