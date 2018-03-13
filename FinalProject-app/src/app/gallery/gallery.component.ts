import { Component, Input } from '@angular/core';
import { DishesService } from '../dishes/dishes.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [DishesService]
})
export class GalleryComponent
 {
  constructor(private service: DishesService) {
  }
  
  @Input() datasource: any;
  selectedImage: string;
  count: number;
  type:string; 
  
  setSelectedImage(image: any, TypeOfDish: any) {
    this.selectedImage = image;
  }
  add(item: any) {// add count 
    console.log(item.Id);
    let body = {
      CustomerId: localStorage.getItem("UserId"),
      OrderId: localStorage.getItem("OrderId"),
      DishId: item.Id,Count:this.count
    };

    this.service.AddDish(body).subscribe(x => { console.log("Add success") },
      (err) => { console.log("Add failed" + err) })

  }

}
