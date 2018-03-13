import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from './dishes.service';
import { AuthService } from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  providers: [DishesService],
})
export class DishesComponent implements OnInit {
  ngOnInit() {
    this.TypeOfDish = this.route.snapshot.paramMap.get('id');
    console.log(this.TypeOfDish);

    this.service.GetDishes(this.TypeOfDish).
      subscribe(res => { this.images = res.json(); console.log(this.images) },
      (err) => { console.log("Error" + err) }
      );
  }

  TypeOfDish: any;
  images: any[];
  arrDishes: any[];
  customerId: any[];

  constructor(private route: ActivatedRoute, private service: DishesService, private AuthService: AuthService) {
    this.customerId = AuthService.GetCoustomerDetails();
    console.log(this.customerId + "12");
    
    
  }


}
