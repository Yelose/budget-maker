import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import BudgetModel from 'src/app/model/budget/budget';
import RoomModel from 'src/app/model/budget/room';
import ProductModel from 'src/app/model/productModel';

@Component({
  selector: 'app-room-popup',
  templateUrl: './room-popup.component.html',
  styleUrls: ['./room-popup.component.scss'],
})
export class RoomPopupComponent implements OnInit {
  @Input('budget') public budget: BudgetModel;
  public product: ProductModel;
  public room: RoomModel;
  @ViewChild('roomName') public roomName: ElementRef<HTMLInputElement>;
  @ViewChild('roomWidth') public roomWidth: ElementRef<HTMLInputElement>;
  @ViewChild('roomLength') public roomLength: ElementRef<HTMLInputElement>;

  public addProduct(): void {
    if (this.room != null) {
      this.room.products.push(this.product);
    } else {
      let room = new RoomModel();
      room.name = this.roomName.nativeElement.value;
      room.width = parseFloat(this.roomWidth.nativeElement.value);
      room.length = parseFloat(this.roomLength.nativeElement.value);
      room.products = [];
      room.products.push(this.product);
      this.budget.rooms.push(room);
    }
    this.shown = false;
  }
  public show(product: ProductModel): void {
    this.shown = true;
    this.product = product;
  }
  public shown: boolean;
  constructor() {
    this.shown = false;
  }

  ngOnInit(): void {}
}
