
import { Component, Input, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {
    trigger,
    state,
    animate,
    style,
    transition,
    keyframes
} from '@angular/core';

@Component({
    selector: 'gift-voucher',
    templateUrl: './gift-voucher.component.html',
    styleUrls: ['./gift-voucher.component.css'],

})
export class GiftVoucherComponent {
    closecontext: boolean = true;

    close() {
        this.closecontext!= this.closecontext;
    }

}