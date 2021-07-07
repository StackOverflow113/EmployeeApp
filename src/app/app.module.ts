import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddEditEmployeComponent } from './components/add-edit-employe/add-edit-employe.component';
import { ListEmployeComponent } from './components/list-employe/list-employe.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessageConfirmComponent } from './components/shared/message-confirm/message-confirm.component';
import { AngularMaterialModule } from './Components/shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddEditEmployeComponent,
    ListEmployeComponent,
    NavbarComponent,
    MessageConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
