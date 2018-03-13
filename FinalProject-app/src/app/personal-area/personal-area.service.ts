import { Http } from '@angular/http';import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';



export class PersonalAreaService 
{
private url : string="http://localhost:60326/api/order/";
Get(id:any)
 {
    return this.http.get(this.url+"?customerId="+id);
 }

 constructor(@Inject(Http) private http:Http)
{}
}