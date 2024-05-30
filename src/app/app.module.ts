import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DataHubModule } from './data-hub/data-hub.module';
import { HomeComponent } from './DataHub/home/home.component';
import { CreateComponent } from './DataHub/create/create.component';
import { EditComponent } from './DataHub/edit/edit.component';
import { AboutComponent } from './DataHub/about/about.component';
import { ResumeComponent } from './DataHub/resume/resume.component';
import { ContactComponent } from './DataHub/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    HeaderComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    AddEditEmpComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    DataHubModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataHubModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
