import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { InvitationService } from './invitation.service';
import { Invitarion } from './invitation';
import { Dish } from './invitation';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css'],
  providers: [InvitationService],
})
export class InvitationComponent {

  constructor(private service: InvitationService, private CustonerService: AuthService ,private router:Router) {

    //קריאה לחשבונית הלקוח
    this.service.GetOrderDetails(Number(localStorage.getItem('OrderId')))
      .subscribe(rsp => {
        this.arrInvitationDetails = rsp.json();
        console.log("Get invitation by customer id");
        console.log(this.arrInvitationDetails);

        // //קריאה לרשימת מנות 
        this.service.GetDishes()
          .subscribe(rsp => {
            this.arrDishes = rsp.json();
            console.log(this.arrDishes + "Dishes list")

            this.SortInvition(this.arrInvitationDetails);
          }, (err) => { console.log("error" + err) });
      }, (err) => { console.log("error" + err) });
  }

  GetDishPrice(Id: number)//הוצאת שם מנה ,כמות,מחיר לפי איידי 
  {
    let GetDish: any[];
    for (var index = 0; index < this.arrDishes.length; index++) {
      if (this.arrDishes[index].Id == Id) {
        GetDish = [this.arrDishes[index].Id, this.arrDishes[index].Name, this.arrDishes[index].Price];
      }
    }
    return GetDish;
  }
  edited: boolean = true;
  totalPrice: number = 0;
  IndexDelete: number;
  arrDishes: any[];
  arrInvitationDetails: any[];
  arrInvitation: Invitarion[] = new Array<Invitarion>();

  GetTotalPrice() {
    this.totalPrice = 0;
    let total: number;
    for (var index = 0; index < this.arrInvitation.length; index++) {
      this.totalPrice = this.totalPrice + (this.arrInvitation[index].Dish.Price * this.arrInvitation[index].Count);
    }

  }


  Delete(IndexD: number)
  { this.IndexDelete = IndexD }

  DeleteOrder() {
    var IdDish = this.arrInvitation[this.IndexDelete].Dish.Id;//לשנות את האיידי לאורדר איידי
    var IdOrder = this.arrInvitation[this.IndexDelete].Id;
    this.arrInvitation.slice(this.IndexDelete, 1);
    console.log(this.arrInvitation);
    const req = this.service.DeleteOrder(IdOrder, IdDish);
    req.subscribe(rsp => { console.log("Deleted Order" + rsp) }, (err) => { console.log("error" + err) });
    this.GetTotalPrice();
  }

  SortInvition(arr: any[]) //sort array by its class 
  {
    let index: number;
    for (index = 0; index < arr.length; index++) {
      let DishName = this.GetDishPrice(arr[index].DishId);
      console.log(DishName);
      let NewDish: Dish = new Dish(DishName[0], DishName[1], DishName[2]);
      let newInvetion: Invitarion = new Invitarion(
        arr[index].Id,
        arr[index].OrderId,
        arr[index].CustomerId,
        NewDish,
        arr[index].Count,
        arr[index].Time,
        arr[index].Date,
      );
      this.arrInvitation.push(newInvetion);
      this.GetTotalPrice()
      console.log(this.arrInvitation);
    }
  }


GoPayment(Price:any)
{
  this.CustonerService.amount=this.arrInvitation.length;
   this.CustonerService.TotalPrice=Price;
  this.router.navigate(['/Payment']);
}
}
