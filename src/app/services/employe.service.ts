import { Injectable } from '@angular/core';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  listEmploye: Employe[] = [
    { FullName: 'Carlos Moreno', Email: 'narutopro@live.com', Telephone: 6561042849, Sex: 'male', AdmissionDate: new Date(), CivilStatus: 'Alone' },
    { FullName: 'Juan Carlos', Email: 'juan@gmail.com', Telephone: 6561012535, Sex: 'male', AdmissionDate: new Date(), CivilStatus: 'Married' },
    { FullName: 'Jose Armenta', Email: 'jose@gmail.com', Telephone: 65640566819, Sex: 'male', AdmissionDate: new Date(), CivilStatus: 'Alone' },
    { FullName: 'Ana Maria ', Email: 'anamaria@gmailc.om', Telephone: 65610485604, Sex: 'female', AdmissionDate: new Date(), CivilStatus: 'Married' },
    { FullName: 'Alejandrina Guerrero', Email: 'ale123@hotmail.com', Telephone: 6561845609, Sex: 'female', AdmissionDate: new Date(), CivilStatus: 'In a relationship' },
    { FullName: 'Iveth Guerrero', Email: 'iveth@gmail.com', Telephone: 6565647859, Sex: 'female', AdmissionDate: new Date(), CivilStatus: 'Alone' },
    { FullName: 'Sebastian Aguilar', Email: 'sebas@gmail.com', Telephone: 6561047859, Sex: 'male', AdmissionDate: new Date(), CivilStatus: 'Alone' }
  ];
  constructor() { }

  getEmploye() {
    return this.listEmploye.slice();
  }

  eliminar(index: number) {
    this.listEmploye.splice(index, 1);
  }
}
