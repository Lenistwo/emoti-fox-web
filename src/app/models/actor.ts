import {Address} from './address';
import {PersonalData} from './personal-data';

export interface Actor {
  id: string;
  name: string;
  surname: string;
  address: Address;
  personalData: PersonalData;
}
