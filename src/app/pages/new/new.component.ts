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
  public title: string[];
  constructor(private service: MainService) {
    this.title = ['Laminated Flooring', 'Vinyl Flooring'];
  }

  async ngOnInit(): Promise<void> {
    this.floorings = await this.service.flooring.GetFlooring();
    this.clients = await this.service.client.GetClients();
    this.vinyls = await this.service.vinyl.GetVinyl();
  }
}
