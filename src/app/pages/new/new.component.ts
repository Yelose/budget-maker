import { Component, OnInit } from '@angular/core';
import ClientModel from 'src/app/model/clientModel';
import FlooringModel from 'src/app/model/flooringModel';
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
  selected = '';
  constructor(private service: MainService) {}
  async ngOnInit(): Promise<void> {
    this.floorings = await this.service.flooring.GetFlooring();
    this.clients = await this.service.client.GetClients();
    this.vinyls = await this.service.vinyl.GetVinyl();
    this.woods = await this.service.wood.GetWoods();
    this.skirtings = await this.service.skirting.GetSkirting();
    this.title = ['Laminated', 'Vinyl', 'Wood', 'Skirting'];
  }
}
