import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActorsService} from '../../services/actors.service';
import {Actor} from '../../models/actor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  id: string;
  actor: Actor;
  private sub: any;

  constructor(private route: ActivatedRoute, private service: ActorsService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.retrieveActorById(this.id).subscribe(actor => {
      this.actor = actor;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
