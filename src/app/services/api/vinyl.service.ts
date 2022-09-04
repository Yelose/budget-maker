import { Injectable } from '@angular/core';
import FlooringModel from 'src/app/model/productModel';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class VinylService {
  public service: MainService;
  constructor() {}
  public async GetVinyl(): Promise<FlooringModel[]> {
    return await this.service.HttpGet('/vinyl.json');
  }
}
