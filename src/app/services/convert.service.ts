import {Injectable} from '@angular/core';
import {ActorMT} from '../transport-models/ActorMT';
import {FormGroup} from '@angular/forms';
import {AddressMT} from '../transport-models/addressMT';
import {PersonalDataMT} from '../transport-models/personal-dataMT';
import {Actor} from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() {
  }

  convertToTransportModel(form: FormGroup): ActorMT {
    const actorMT = new ActorMT();
    actorMT.name = form.value.name;
    actorMT.surname = form.value.surname;

    const addressMT = new AddressMT();
    addressMT.city = form.value.address.city;
    addressMT.street = form.value.address.street;
    addressMT.zipCode = form.value.address.zipCode;

    const personalDataMT = new PersonalDataMT();
    personalDataMT.age = form.value.personalData.age;
    personalDataMT.bornYear = form.value.personalData.birthday;
    personalDataMT.imgUrl = form.value.personalData.img;
    actorMT.address = addressMT;
    actorMT.personalData = personalDataMT;
    return actorMT;
  }

  updateAndConvert(form: FormGroup, actor: Actor): ActorMT {
    const actorMT = new ActorMT();
    actorMT.id = actor.id;
    actorMT.name = form.value.name;
    actorMT.surname = form.value.surname;

    const addressMT = new AddressMT();
    addressMT.city = form.value.address.city;
    addressMT.street = form.value.address.street;
    addressMT.zipCode = form.value.address.zipCode;

    const personalDataMT = new PersonalDataMT();
    personalDataMT.age = form.value.personalData.age;
    personalDataMT.bornYear = form.value.personalData.birthday;
    personalDataMT.imgUrl = form.value.personalData.img;
    actorMT.address = addressMT;
    actorMT.personalData = personalDataMT;
    return actorMT;
  }
}
