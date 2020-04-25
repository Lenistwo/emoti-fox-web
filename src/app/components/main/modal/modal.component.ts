import {Component, Inject, OnInit} from '@angular/core';
import {Actor} from '../../../models/actor';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MainComponent} from '../main.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<MainComponent>, @Inject(MAT_DIALOG_DATA) public selected: Actor) {

  }

  ngOnInit() {
    console.log('init ');
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
