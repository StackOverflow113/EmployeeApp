import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeComponent } from './Components/add-edit-employe/add-edit-employe.component';
import { ListEmployeComponent } from './Components/list-employe/list-employe.component';

const routes: Routes = [
  { path: '', component: ListEmployeComponent },
  { path: 'add', component: AddEditEmployeComponent },
  { path: 'edit/:id', component: AddEditEmployeComponent },
  { path: '**', component: ListEmployeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
