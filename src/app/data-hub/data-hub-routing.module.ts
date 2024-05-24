import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../DataHub/home/home.component';
import { CreateComponent } from '../DataHub/create/create.component';
import { EditComponent } from '../DataHub/edit/edit.component';
import { AboutComponent } from '../DataHub/about/about.component';
import { ResumeComponent } from '../DataHub/resume/resume.component';
import { ContactComponent } from '../DataHub/contact/contact.component';

const routes: Routes = [
  {path:"Datahub/home", component: HomeComponent},
  {path:"Datahub/create", component: CreateComponent},
  {path:"Datahub/about", component: AboutComponent},
  {path:"Datahub/resume", component: ResumeComponent},
  {path:"Datahub/contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataHubRoutingModule { }
