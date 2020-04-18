import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActorsService} from '../../services/actors.service';
import {Actor} from '../../models/actor';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ConvertService} from '../../services/convert.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit, OnDestroy {

  id: string;
  actor: Actor;
  private sub: any;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
    }),
    personalData: new FormGroup({
      age: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
    })
  });

  constructor(private service: ActorsService, private route: ActivatedRoute, private convert: ConvertService, private router: Router) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.retrieveActorById(this.id).subscribe(actor => {
      this.actor = actor;
      this.prepareForm();
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    const actorMT = this.convert.updateAndConvert(this.form, this.actor);
    this.service.updateActor(actorMT);
    this.router.navigate(['/main']);
  }

  prepareForm() {
    this.form.patchValue({
      name: this.actor.name,
      surname: this.actor.surname,
      address: {
        city: this.actor.address.city,
        street: this.actor.address.street,
        zipCode: this.actor.address.zipCode
      },
      personalData: {
        age: this.actor.personalData.age,
        birthday: this.actor.personalData.bornYear,
        img: this.actor.personalData.imgUrl
      }
    });
  }
}
