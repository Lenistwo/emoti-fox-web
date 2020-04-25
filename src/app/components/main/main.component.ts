import {Component, OnInit} from '@angular/core';
import {ActorsService} from '../../services/actors.service';
import {Actor} from '../../models/actor';
import {Observable, of} from 'rxjs';
import {MatDialog, MatDialogRef, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {ModalComponent} from './modal/modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  actor: Observable<Actor[]> = of([]);

  constructor(private actorsService: ActorsService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
              private dialog: MatDialog) {

  }

  ngOnInit() {
    this.actorsService.retrieveAllData().subscribe(value => {
      this.actor = of(value);
    });
    this.iconRegistry.addSvgIcon('more', this.sanitizer.bypassSecurityTrustResourceUrl('assets/more_vert-24px.svg'));
  }

  onClick(selected: Actor) {
    this.dialog.open(ModalComponent, {
      width: '250px',
      data: selected
    });
  }
}
