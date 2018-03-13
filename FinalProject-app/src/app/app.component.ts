import { Component ,trigger,state,animate,style,transition,keyframes} from '@angular/core';
import {AuthService} from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  arrcustomer:any[];
  constructor(public auth:AuthService)
  {
  this.auth.handleAuthentication();
  this.auth.isAuthenticated();
  this.auth.IsManager();
  }


}
