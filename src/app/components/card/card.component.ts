import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('name') public name: string;
  @Input('title') public title: string;
  @Input('vendorprice') public vendorprice: string;
  @Input('finalprice') public finalprice: string;
  @Input('img0') public img0: string;
  @Input('img1') public img1: string;
  constructor() {}

  ngOnInit(): void {}
}
