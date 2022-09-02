import { Component, OnInit } from '@angular/core';
import ClientModel from 'src/app/model/clientModel';
import FlooringModel from 'src/app/model/flooringModel';
import { MainService } from 'src/app/services/api/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public floorings: FlooringModel[];
  public clients: ClientModel[];

  constructor(private service: MainService) {}

  async ngOnInit(): Promise<void> {
    this.floorings = await this.service.flooring.GetFlooring();
    this.clients = await this.service.client.GetClients();
  }
}
