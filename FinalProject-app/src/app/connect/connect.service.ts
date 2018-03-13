import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';

@Injectable()
export class ConnectService {
  constructor( @Inject(Http) private http: Http) { }

  private url: string;
  Post(connect: any) {
    this.url = "http://localhost:60326/api/SandMail/"
    return this.http.post(this.url, connect);
  }
}
