import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { ManagementService } from '../management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'adddish',
  templateUrl: './adddish.component.html',
  styleUrls: ['./adddish.component.css'],
  providers: [ManagementService],
})

export class AddDishComponent {
  arrCategory: string[] = ["meat", "prv", "dairy", "dessert"];

  constructor(private service: ManagementService, private router: Router, private route: ActivatedRoute, private http: Http) {
    this.service.GetChef().subscribe(res => { this.arrChef = res.json(), console.log("chef arr" + this.arrChef) },
      (err) => { console.log("Error" + err) });
  }

  arrChef: any[];
  NDish: string;
  NChef: any;//need to be string
  ChefId: any[];
  Category: string;
  Description: string;
  // Url: string;
  Price: number;

  file: File;
  formData: FormData = new FormData();
  options: any;
  apiUrl1: string;




  GetChefId(chef: any) {
    // return this.arrChef.forEach(element => {if(element.Name==this.NChef){return element.Id}return -1});
    alert(chef);
    for (let index = 0; index < this.arrChef.length; index++) {
      if (chef = this.arrChef[index].Name) {
        alert(this.arrChef[index].Id);
        return this.arrChef[index].Id;
      }
    }
  }

  AddDish() {
    alert(this.NChef);
    this.ChefId = this.GetChefId(this.NChef);
    console.log(this.ChefId);
    alert(this.ChefId);
    console.log(this.Category + "a");/// לשנות את השף איידיי
       const body = { chefId:this.ChefId, category: this.Category, Name: this.NDish, Description: this.Description, Url: "../assets/images/"+this.Category+"/"+this.file.name, Price: this.Price };
      console.log(body);
      this.service.AddDish(body).subscribe(res => { 
        console.log(res + "add succeed"), this.AddItem(),
        this.router.navigate(['Management']); },
        (err) => { console.log("error" + err) });
      console.log("here");
  }

  UpLoadFile(event: any) {
    window.alert("fileChange");
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      this.file = fileList[0];
      this.formData.append('uploadFile', this.file, "//images//" + this.Category + "//" + this.file.name);
      window.alert(this.Category);
      let headers = new Headers();

      this.options = new RequestOptions({ headers: headers });
      this.apiUrl1 = "http://localhost:60326/api/UpLoadFile/";
    }
  }


  AddItem() {
    window.alert("AddItem");
    this.http.post(this.apiUrl1, this.formData, this.options)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
      data => console.log('success'),
      error => console.log(error)
      )
  }

}
