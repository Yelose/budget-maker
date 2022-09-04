import { Component, OnInit } from '@angular/core';
import ClientModel from 'src/app/model/clientModel';
import FlooringModel from 'src/app/model/productModel';
import { MainService } from 'src/app/services/api/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public floorings: FlooringModel[];
  public clients: ClientModel[];
  public vinyls: FlooringModel[];
  constructor(private service: MainService) {}

  async ngOnInit(): Promise<void> {
    this.floorings = await this.service.flooring.GetFlooring();
    this.clients = await this.service.client.GetClients();
    this.vinyls = await this.service.vinyl.GetVinyl();
  }
}
