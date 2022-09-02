import { Injectable } from '@angular/core';
import FlooringModel from 'src/app/model/flooringModel';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class FlooringService {
  public service: MainService;

  constructor() {}

  public async GetFlooring(): Promise<FlooringModel[]> {
    return await this.service.HttpGet('/flooring.json');
  }
}
