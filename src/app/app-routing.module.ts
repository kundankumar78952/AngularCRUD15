import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './DataHub/home/home.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/Datahub/home',
  pathMatch: 'full'
},
{path:"home", component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
