import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from '../../models/employe';
import { EmployeService } from '../../services/employe.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-edit-employe',
  templateUrl: './add-edit-employe.component.html',
  styleUrls: ['./add-edit-employe.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }]
})
export class AddEditEmployeComponent implements OnInit {
  civilStatus: any[] = ['Single', 'Married', 'Divorced'];
  idEmployee: any;
  action = 'Add';

  myForm: FormGroup;
  constructor(private fb: FormBuilder, private empleadoService: EmployeService, private rout: Router, public snackBar: MatSnackBar, private aRoute: ActivatedRoute) {
    this.myForm = this.fb.group({
      FullName: ['', [Validators.required, Validators.maxLength(30)]],
      Telephone: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      AdmissionDate: ['', [Validators.required]],
      CivilStatus: ['', [Validators.required]],
      Sex: ['', [Validators.required]]
    });
    this.idEmployee = this.aRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.idEmployee !== undefined) {
      this.action = 'Edit';
      this.editEmployee();
    }
  }
  save() {
    const employe: Employe = {
      FullName: this.myForm.get('FullName').value,
      Telephone: this.myForm.get('Telephone').value,
      Email: this.myForm.get('Email').value,
      AdmissionDate: this.myForm.get('AdmissionDate').value,
      CivilStatus: this.myForm.get('CivilStatus').value,
      Sex: this.myForm.get('Sex').value,
    };

    if (this.idEmployee !== undefined) {
      this.editarEmpleado(employe);
    } else {
      this.addEmployee(employe)
    }
  }

  editarEmpleado(employe: Employe) {
    this.empleadoService.editEmployee(employe, this.idEmployee);
    this.rout.navigate(['/']);
    this.snackBar.open('Employe successfully updated', '', {
      duration: 3000
    });
  }
  addEmployee(employe: Employe) {
    this.empleadoService.addEmploye(employe);
    this.rout.navigate(['/']);
    this.snackBar.open('Employe successfully added', '', {
      duration: 3000
    });
  }

  editEmployee() {
    const employee: Employe = this.empleadoService.getEmployee(this.idEmployee);
    console.log(employee);
    this.myForm.patchValue({
      FullName: employee.FullName,
      Telephone: employee.Telephone,
      Email: employee.Email,
      AdmissionDate: employee.AdmissionDate,
      CivilStatus: employee.CivilStatus,
      Sex: employee.Sex
    })
  }

}

