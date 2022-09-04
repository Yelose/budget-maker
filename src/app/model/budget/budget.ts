import ClientModel from '../clientModel';
import RoomModel from './room';

export default class BudgetModel {
  public client: ClientModel;
  public rooms: RoomModel[];
}
