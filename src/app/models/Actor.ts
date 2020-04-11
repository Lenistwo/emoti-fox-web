import {Address} from './Address';
import {PersonalData} from './PersonalData';

export interface Actor {
  id: string;
  name: string;
  surname: string;
  address: Address;
  personalData: PersonalData;
}
