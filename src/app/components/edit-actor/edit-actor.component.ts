import {Component, OnInit} from '@angular/core';
import {ActorsService} from '../../services/actors.service';
import {Actor} from '../../models/Actor';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  actor: Actor;

  constructor(private actorsService: ActorsService) {
  }

  ngOnInit() {

  }

}
