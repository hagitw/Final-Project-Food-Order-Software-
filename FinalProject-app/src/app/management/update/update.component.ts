import { Component } from '@angular/core';
import {  Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { ManagementService } from '../management.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
    selector: 'update',
    templateUrl: './update.component.html',
    styleUrls:['./update.component.css'],
    providers: [ManagementService],
})

export class UpDateComponent {

      arrCategory: string[] = ["meat", "prv", "dairy", "dessert"];
      arrChef: any[];
    Dish: string;
    arrDish: any;
    Id: number;
    NDish: string;
    NChef: number;//need to be string
    Category: string;
    Description: string;
    Url: string;
    Price: number;

     file: File;
  formData: FormData = new FormData();
  options: any;
  apiUrl1: string;

    constructor(private service: ManagementService, private router: Router, private route: ActivatedRoute,private http: Http) {

        this.Dish = this.route.snapshot.paramMap.get('id');
        this.arrDish = JSON.parse(this.Dish);
        console.log(this.arrDish);
        this.Id = this.arrDish.Id;
        this.NDish = this.arrDish.Name;
        this.NChef = this.arrDish.chefId;
        this.Category = this.arrDish.category;
        this.Description = this.arrDish.Description;
        this.Url = this.arrDish.Url;
        this.Price = this.arrDish.Price;

          this.service.GetChef().subscribe(res => { this.arrChef = res.json(), console.log("chef arr" + this.arrChef) },
      (err) => { console.log("Error" + err) });
    }

    UpDate() {/// לשנות את השף איידיי
        const body = { chefId: 2, category: this.Category, Name: this.NDish, Description: this.Description,  Url: "../assets/images/"+this.Category+"/"+this.file.name, Price: this.Price };
        console.log(body);
        const req = this.service.UpDateDiah(body,this.Id);
        req.subscribe(res => { console.log(res + "Up Date succeed"), this.AddItem(), this.router.navigate(['Management']); }, (err) => { console.log("error" + err) });
        console.log(this.Description);
        console.log("here");
    }

    UpLoadFile(event: any) {
    window.alert("fileChange");
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      this.file = fileList[0];
      this.formData.append('uploadFile', this.file, "//images//"+this.Category + "//" + this.file.name);
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