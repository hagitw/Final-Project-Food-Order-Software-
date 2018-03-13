import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';

@Injectable()
export class AuthService {
amount:any;
  ArrCustomer: any;
  userProfile: any;
  TotalPrice:any;
  CustomerEmail:any;
  profile: any;

  GetCoustomerDetails(): any {
    console.log(localStorage.getItem('UserId'));
    return [localStorage.getItem('UserId'), localStorage.getItem('OrderId'),
     localStorage.getItem('Permission')];
  }
  constructor(public router: Router, @Inject(Http) private http: Http) { }

  public login(): void {
    this.auth0.authorize();
    this.ArrCustomer = this.userProfile;
    console.log(this.ArrCustomer);
  }
  auth0 = new auth0.WebAuth({
    clientID: 'tSbcFnwPdpwg3KzyVEaMEXAiLpjZzN72',
    domain: 'finalpro.auth0.com',
    responseType: 'token id_token',
    audience: 'https://finalpro.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200',
    scope: 'openid email profile'
  });

  public handleAuthentication(): void { ///not login
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/Home']);
      } else if (err) {
        this.router.navigate(['/Home']);
        console.log(err);
      }
    });
  }


  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    // get user profile

    this.getProfile((err, profile) => {
      this.profile = profile;
      console.log(this.profile);

      //update or create user in server & get user id

      let NewUser = { FirstName: this.profile.name, Email: this.profile.email }
      this.CustomerEmail= this.profile.email;
      console.log(NewUser);

      this.UpDateUserInServer(NewUser).subscribe(res => {
        this.ArrCustomer = res.json();
        console.log(this.ArrCustomer.id + "id");
        localStorage.setItem('UserId', this.ArrCustomer.id);
        localStorage.setItem('OrderId', this.ArrCustomer.OrderId);
        localStorage.setItem('Permission', this.ArrCustomer.Permission);

      },
        (err) => { console.log("Filed" + err); })
    });

  }
  UpDateUserInServer(User: any) {
    let url = "http://localhost:60326/api/user";
    return this.http.post(url, User);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // remove from local Storage
    localStorage.removeItem('UserId');
    localStorage.removeItem('OrderId');
    localStorage.removeItem('Permission');
    console.log("Log Out");

    this.TotalPrice=0;
    this.amount=0;
    // Go back to the home route
    this.router.navigate(['/Home']);

  }
  public IsManager(): boolean
  {
   let Manager=localStorage.getItem('Permission');
    if(Manager=='manager')
      {
        console.log(localStorage.getItem('Permission'));
         console.log(Manager)
        return true;
      }
      return false;
  }
  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // if (!new Date().getTime() < expiresAt) { this.ArrCustomer = null; }//log out if the time expires
    return new Date().getTime() < expiresAt;
  }


  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }
}