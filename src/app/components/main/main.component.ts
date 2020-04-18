import {Component, OnInit} from '@angular/core';
import {ActorsService} from '../../services/actors.service';
import {Actor} from '../../models/actor';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private actorService;
  actor: Actor[] = [];

  constructor(actorsService: ActorsService) {
    this.actorService = actorsService;
  }

  ngOnInit() {
    this.actorService.retrieveAllData().subscribe(value => {
      this.actor = value;
    });
  }

}
