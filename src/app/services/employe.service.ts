import { Injectable } from '@angular/core';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  listEmploye: Employe[] = [
    { FullName: 'Carlos Moreno', Email: 'carloseduardomorenocamacho@gmail.com', Telephone: 6561042849, Sex: 'male', AdmissionDate: new Date(), CivilStatus: 'Single' },
  ];
  constructor() { }

  getEmploye() {
    return this.listEmploye.slice();
  }

  eliminar(index: number) {
    this.listEmploye.splice(index, 1);
  }

  addEmploye(employe: Employe) {
    this.listEmploye.unshift(employe)
  }
  getEmployee(index: number) {
    return this.listEmploye[index];
  }

  editEmployee(empleado: Employe, idEmploye: number) {
    this.listEmploye[idEmploye].FullName = empleado.FullName;
    this.listEmploye[idEmploye].Telephone = empleado.Telephone;
    this.listEmploye[idEmploye].Email = empleado.Email;
    this.listEmploye[idEmploye].AdmissionDate = empleado.AdmissionDate;
    this.listEmploye[idEmploye].CivilStatus = empleado.CivilStatus;
    this.listEmploye[idEmploye].Sex = empleado.Sex;
  }
}
