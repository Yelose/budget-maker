import { Component, OnInit } from '@angular/core';
import BudgetModel from 'src/app/model/budget/budget';
import ClientModel from 'src/app/model/clientModel';
import FlooringModel from 'src/app/model/productModel';
import { MainService } from 'src/app/services/api/main.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  public floorings: FlooringModel[];
  public clients: ClientModel[];
  public vinyls: FlooringModel[];
  public woods: FlooringModel[];
  public skirtings: FlooringModel[];
  public title: string[];
  public selected: ClientModel;
  public budget: BudgetModel;

  constructor(private service: MainService) {
    this.budget = new BudgetModel();
    this.budget.rooms = [];
    this.title = ['Laminated', 'Vinyl', 'Wood', 'Skirting'];
  }
  async ngOnInit(): Promise<void> {
    this.floorings = await this.service.flooring.GetFlooring();
    this.clients = await this.service.client.GetClients();
    this.vinyls = await this.service.vinyl.GetVinyl();
    this.woods = await this.service.wood.GetWoods();
    this.skirtings = await this.service.skirting.GetSkirting();
  }
}
