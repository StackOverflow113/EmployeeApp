import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-confirm',
  templateUrl: './message-confirm.component.html',
  styleUrls: ['./message-confirm.component.css']
})
export class MessageConfirmComponent implements OnInit {
  mensaje: string;
  btn = 'aceptar';
  constructor(public dialogRef: MatDialogRef<MessageConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.mensaje = data.mensaje;
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
