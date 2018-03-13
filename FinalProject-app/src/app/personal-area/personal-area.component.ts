import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { PersonalAreaService } from './personal-area.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css'],
  providers: [PersonalAreaService, AuthService],
})
export class PersonalAreaComponent implements OnInit {

  ArOrders: any[];
  uploud: boolean = false;
  profile: any;

  constructor(private service: PersonalAreaService, private auth: AuthService) {
    const req = this.service.Get(localStorage.getItem('UserId'));
    console.log(req);
    req.subscribe(res => {
      this.ArOrders = res.json();
      console.log(this.ArOrders);
    },
      (err) => { console.log("Filed" + err); })
  }
  
  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile();
      console.log(this.profile)
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log("profile" + err);
      });
      
    }
  }
}
