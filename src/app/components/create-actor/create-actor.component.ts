import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ConvertService} from '../../services/convert.service';
import {ActorsService} from '../../services/actors.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

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

  constructor(private convert: ConvertService, private actorsService: ActorsService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const actorMT = this.convert.convertToTransportModel(this.form);
    this.actorsService.saveActor(actorMT);
    this.router.navigate(['/main']);
  }
}
