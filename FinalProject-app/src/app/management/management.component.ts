import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { ManagementService } from './management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
  providers: [ManagementService],

})
export class ManagementComponent {

  ShowOrders: boolean = true;
  ShowUsers: boolean = true;
  ShowConnections: boolean = true;
  ShowDishes: boolean = true;
  arrUser: any[];
  arrOrders: any[];
  arrConnection: any[];
  arrDishes: any[];

  constructor(private service: ManagementService, private router: Router, private route: ActivatedRoute) {
    // let req = this.service.GetInfoUsers();
    // req.subscribe(res => { this.arrUser = res.json(), console.log("Users Info", this.arrUser) }, (err) => { console.log("Error" + err) })
    this.GetUsers();
    this.ShowOrders = false;
    this.ShowUsers = true;
    this.ShowConnections = false;
    this.ShowDishes = false;

  }
  GetUserOrders() {
    let req = this.service.GetInfoInvitation();
    req.subscribe(res => { this.arrOrders = res.json(), console.log("Get Users Info") }, (err) => { console.log("Error" + err) })
    this.ShowOrders = true;
    this.ShowUsers = false;
    this.ShowConnections = false;
    this.ShowDishes = false;
  }
  GetUsers() {
    let req = this.service.GetInfoUsers();
    req.subscribe(res => { this.arrUser = res.json(), console.log("Users Info", this.arrUser) }, (err) => { console.log("Error" + err) })
    this.ShowOrders = false;
    this.ShowUsers = true;
    this.ShowConnections = false;
    this.ShowDishes = false;
  }
  GetConnections() {
    let req = this.service.GetConnection();
    req.subscribe(res => { this.arrConnection = res.json(), console.log("connections", this.arrConnection) }, (err) => { console.log("Error" + err) })
    this.ShowOrders = false;
    this.ShowUsers = false;
    this.ShowConnections = true;
    this.ShowDishes = false;
  }
  GetDishes() {
    let req = this.service.GetDishes();
    req.subscribe(res => { this.arrDishes = res.json(), console.log("Dishes", this.arrDishes) }, (err) => { console.log("Error" + err) })
    this.ShowOrders = false;
    this.ShowUsers = false;
    this.ShowConnections = false;
    this.ShowDishes = true;
  }
  DeleteDish(Dish: any) {
    let req = this.service.DelDish(Dish.Id);
    req.subscribe(res => { console.log("Delete Dish" + res) }, (err) => { console.log("Filed" + err) })
    this.GetDishes();
  }

  DeleteOrder(order: any) {
    let req = this.service.DelOrder(order.Id);
    req.subscribe(res => { console.log("Delete" + res) }, (err) => { console.log("Filed" + err) })
    this.GetUserOrders();
  }
  DeleteUser(User: any) {
    let req = this.service.DelUser(User.Id);
    req.subscribe(res => { console.log("Delete" + res) }, (err) => { console.log("Filed" + err) })
    this.GetUsers();
  }

  DeleteConnect(Connect: any) {
    let req = this.service.DelConnection(Connect.Id);
    req.subscribe(res => { console.log("Delete" + res) }, (err) => { console.log("Filed" + err) })
    this.GetConnections();
  }
  GoAddDish() {
    this.router.navigate(['AddDish']);
    console.log("router");
  }
  UpDateDish(Dish: any) {
    this.router.navigate(['UpDate', JSON.stringify(Dish)]);
  }

}
