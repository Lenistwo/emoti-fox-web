import {Actor} from '../models/actor';
import {AddressMT} from './addressMT';
import {PersonalDataMT} from './personal-dataMT';

export class ActorMT implements Actor {
  address: AddressMT;
  id: string;
  name: string;
  personalData: PersonalDataMT;
  surname: string;

}
