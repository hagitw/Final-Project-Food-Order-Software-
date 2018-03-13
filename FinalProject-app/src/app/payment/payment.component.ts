import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { ConnectService } from '../Connect/Connect.service';
import { AuthService } from '../auth.service';
import { InvitationService } from '../invitation/invitation.service';
import { Router } from '@angular/router';

@Component({
    selector: 'payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css'],
    providers: [ConnectService, InvitationService],
})
export class PaymentComponent {


    name: string;
    phone: string;
    address: string;
    collection: string;
    ArrDish: any[];
    TotalPrice: any;
    price: any;

    constructor(private service: AuthService, private SandService: ConnectService, private Invitation: InvitationService, private router: Router) {
        console.log(this.service.TotalPrice)
        this.price = this.service.TotalPrice;
        this.Invitation.GetOrderDetails(Number(localStorage.getItem('OrderId'))).subscribe(rsp => {
            this.ArrDish = rsp.json();
        },
            (err) => { console.log("error" + err) });
    }

    SandingOrder() {
        const body = { Name: this.name, Subject: "New Order " + this.collection, Email: this.service.CustomerEmail, Phone: this.phone, Massage: this.address + "Order " + JSON.stringify(this.ArrDish) };
        alert(this.collection);
        console.log(body);
        this.SandService.Post(body).subscribe(rsp => {
            console.log("seccses" + rsp),
            this.Invitation.UpDateOrder(this.service.amount,this.service.TotalPrice).
                subscribe(res => { console.log("UpDate Seccses") },
                (err) => { console.log("error" + err) });
            this.router.navigate(["/Home"]);
        }
            , (err) => { console.log("error" + err) }
        )
    }

}
