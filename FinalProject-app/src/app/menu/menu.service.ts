import { Http } from '@angular/http';import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';

export class Menuservice 
{
private url : string;
private id:number;


Get(CustomerId:number)
 {
     let url="https://jsonplaceholder.typicode.com/comments";
    return this.http.get(url);
 }
Post(body:string)
 {

     let url="https://jsonplaceholder.typicode.com/comments";
    return this.http.get(url,body);
 }

 constructor(@Inject(Http) private http:Http)
{}
}