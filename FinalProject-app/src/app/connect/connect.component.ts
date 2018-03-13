import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { ConnectService } from './Connect.service';
@Component({
  selector: 'connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
  providers: [ConnectService],
})
export class ConnectComponent {

  constructor(private service: ConnectService) { }
  ShowPhoneDetalies: string;
  ShowFaxDetalies: string;
  ShowloacctionDetalies: string;

  textname: string;
  subject: string;
  email: string;
  Phone: string;
  massage: string;

  SendComments() {
    const body = { Name: this.textname, Subject: this.subject, Email: this.email, Massage: this.massage }
    window.alert(this.massage);
    console.log(body);
    const req = this.service.Post(body);
    console.log(req);
    req.subscribe(rsp => { console.log("seccses" + rsp) }, (err) => { console.log("error" + err) }
    )
  }
  PhoneDetalies() {
    this.ShowPhoneDetalies = "064-3549780";
  }
  LocationDetalies() {
    this.ShowloacctionDetalies = "Beer-Sheva,Chefs restaurant 89/12";
  }
  FaxDetalies() {
    this.ShowFaxDetalies = "03-6424515";
  }
}
