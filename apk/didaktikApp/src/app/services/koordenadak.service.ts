import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { Koordenadak } from '../interfaces/koordenadak';
@Injectable({
  providedIn: 'root'
})
export class KoordenadakService {
  private url = 'http://127.0.0.1:8000/api/koordenadak';
  constructor(private http: HttpClient) { }
  getKoordenadak() {
    return this.http.get<Koordenadak[]>(this.url);
    }
}
