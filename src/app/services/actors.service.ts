import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from '../models/Actor';
import {Observable} from 'rxjs';
import {BASE_PATH} from '../components/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  retrieveAllData(): Observable<Actor[]> {
    return this.client.get<Actor[]>(BASE_PATH);
  }

  retrieveActorById(id: string): Observable<Actor> {
    return this.client.get<Actor>(BASE_PATH.concat(`/${id}`));
  }

  updateActor(actor: Actor) {
    this.client.post(BASE_PATH, actor).subscribe();
  }
}
