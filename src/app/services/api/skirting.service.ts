import { Injectable } from '@angular/core';
import FlooringModel from 'src/app/model/productModel';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class SkirtingService {
  public service: MainService;
  constructor() {}
  public async GetSkirting(): Promise<FlooringModel[]> {
    return await this.service.HttpGet('/skirting.json');
  }
}
