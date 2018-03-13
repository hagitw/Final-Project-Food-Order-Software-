import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddformComponent } from './addform/addform.component';
import { ConnectComponent } from './connect/connect.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { InvitationComponent } from './invitation/invitation.component';
import { ManagementComponent } from './management/management.component';
import { UpDateComponent } from './management/UpDate/UpDate.Component';
import { AddDishComponent } from './management/AddDish/AddDish.Component';
import { MenuComponent } from './menu/menu.component';
import { DishesComponent } from './dishes/dishes.component';
import { PaymentComponent } from './payment/payment.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { AlertModule } from 'ngx-bootstrap';
import { AuthService } from './auth.service';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AboutComponent } from './About/About.component';
import {GiftVoucherComponent}from './gift-voucher/gift-voucher.component';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token')),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
  }), http, options);
}

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Home', component: HomeComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Dishes/:id', component: DishesComponent },
  { path: 'Invitation', component: InvitationComponent },
  { path: 'Connect', component: ConnectComponent },
  { path: 'Management', component: ManagementComponent },
  { path: 'Payment', component: PaymentComponent },
  { path: 'PersonalArea', component: PersonalAreaComponent },
  { path: 'AddDish', component: AddDishComponent },
  { path: 'UpDate/:id', component: UpDateComponent },
  { path: 'About', component: AboutComponent },
  {path: 'gift-voucher', component: GiftVoucherComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    ConnectComponent,
    GalleryComponent,
    HomeComponent,
    InvitationComponent,
    ManagementComponent,
    UpDateComponent,
    AddDishComponent,
    MenuComponent,
    DishesComponent,
    PaymentComponent,
    PersonalAreaComponent,
    AboutComponent,
    GiftVoucherComponent,
  ],
  imports: [AlertModule.forRoot(), BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
