import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Output('addRoom') public addRoomEvent = new EventEmitter<void>();
  public addRoom(): void {
    this.addRoomEvent.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
