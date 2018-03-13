import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';


export class ManagementService {
    private url: string = "http://localhost:60326/api/";
    GetInfoInvitation() {
        return this.http.get(this.url + "order/");
    }
    GetInfoUsers() {
        return this.http.get(this.url + "user/");
    }
    GetConnection() {
        return this.http.get(this.url + "connectUs/");
    }
    GetDishes() {
        return this.http.get(this.url + "dish/");
    }
    DelUser(UserId: number) {
        return this.http.delete(this.url + "user/" + UserId);
    }
    DelOrder(Orderid: number) {
        return this.http.delete(this.url + "order/" + Orderid);
    }
    DelConnection(ConnectionId: number) {
        return this.http.get(this.url + "connectUs/" + ConnectionId);
    }
    DelDish(DishId: number) {
        return this.http.delete(this.url + "dish/" + DishId);
    }
    AddDish(body: any) {
        return this.http.post(this.url + "dish/", body);
    }
    UpDateDiah(body: any, id: number) {
        return this.http.put(this.url + "dish/" + id, body);
    }
    GetChef()
    {
         return this.http.get(this.url + "chef");
    }
    constructor( @Inject(Http) private http: Http) { }
}