import {Component, Input} from '@angular/core';
import { Http } from '@angular/http'; 
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  //  providers:[MenuComponent]
})
export class MenuComponent   {

 constructor (private router : Router) {}
  ArrMenu:any[];
  ArrUserDishes : any [];

routeDynamically(str:string){
console.log(str);
 this.router.navigate(["/Dishes", str]);   
 }

AddDish(Dish:any){/// לבדוק עם קרן 
let ExsistDish:boolean=false;
for (var index = 0; index < this.ArrUserDishes.length; index++) {
   if(this.ArrUserDishes[index]==Dish)
    {ExsistDish=true;}
}
if(ExsistDish)
  {
   let  IndexDish=this.ArrUserDishes.indexOf(Dish);
   this.ArrUserDishes.slice(IndexDish,1);
    console.log(this.ArrUserDishes+"remove");
  }
  else{
    this.ArrUserDishes.push(Dish);
     console.log(this.ArrUserDishes+"add");
  }
  console.log(this.ArrUserDishes);
}

}
