import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeService } from '../../services/employe.service';
import { Employe } from '../../models/employe';
import { MatDialog } from '@angular/material/dialog';
import { MessageConfirmComponent } from '../shared/message-confirm/message-confirm.component';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})

export class ListEmployeComponent implements OnInit {
  displayedColumns: string[] = ['FullName', 'Telephone', 'Email', 'AdmissionDate', 'Civil Status', 'Sex', 'Actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  listEmpleado: Employe[];

  constructor(private employeService: EmployeService, public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.loadEmploye();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadEmploye() {
    this.listEmpleado = this.employeService.getEmploye();
    this.dataSource = new MatTableDataSource(this.listEmpleado);
    console.log(this.listEmpleado);
  }
  deleteEmploye(index: number) {
    const dialogRef = this.dialog.open(MessageConfirmComponent, {
      width: '350px',
      data: { mensaje: 'are you sure to delete this employee?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.employeService.eliminar(index);
      this.loadEmploye();
    });
  }
}



