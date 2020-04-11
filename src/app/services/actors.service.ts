import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private client: HttpClient;

  constructor(httpClient: HttpClient) {
    this.client = httpClient;
  }

  retrieveData() {
  }
}
