import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';


export class InvitationService {

  private url: string;

  GetOrder(OrderId: number) {
    let url = "http://localhost:60326/api/order/";
    return this.http.get(url);
  }
  GetOrderDetails(orderId: number)//הוצאת חושבונית לפי האידי של ההזמנה
  {
    let url = "http://localhost:60326/api/OrderDetails?orderId=";
    return this.http.get(url + orderId);
  }
  GetDishes() {
    let url = "http://localhost:60326/api/Dish/";
    return this.http.get(url);
  }
  DeleteOrder(IdOrder:number,IdDish:number) {
    let url = "http://localhost:60326/api/OrderDetails/";
    const Body = {Orderid:IdOrder,Dishid:IdDish}
    console.log(Body);
    return this.http.delete(this.url + Body);
  }
  UpDateOrder(amount:any,price:any)
  {
    const Body = {CustomerId:localStorage.getItem('UserId'),Amount:amount,Price:price}
      let url = "http://localhost:60326/api/Order/";
        return this.http.put(url+localStorage.getItem('OrderId'),Body);
  }
  constructor( @Inject(Http) private http: Http)
  { }
}
