import { EmailValidator } from '@angular/forms';

export default class ClientModel {
  public id: number;
  public name: string;
  public surname: string;
  public phone: number;
  public email: EmailValidator;
  public adress: string;
}
