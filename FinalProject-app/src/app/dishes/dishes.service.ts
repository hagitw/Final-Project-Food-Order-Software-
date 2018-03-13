import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';


export class DishesService 
{

private url : string="http://localhost:60326/api/";

GetDishes(Body:any)
{
    return this.http.get(this.url+"dish/?category="+Body);
}
AddDish(Body:any)
 {
     let url="http://localhost:60326/api/OrderDetails/";
    return this.http.post(url,Body);
 }
constructor(@Inject(Http) private http:Http)
{}
}