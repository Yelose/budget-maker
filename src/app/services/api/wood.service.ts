import { Injectable } from '@angular/core';
import FlooringModel from 'src/app/model/flooringModel';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class WoodService {
  public service: MainService;
  constructor() {}
  public async GetWoods(): Promise<FlooringModel[]> {
    return await this.service.HttpGet('/wood.json');
  }
}
