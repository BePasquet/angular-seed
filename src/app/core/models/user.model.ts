import { UserInterface } from '../interfaces/user.interface';
/**
 * Represents model of user
 */
export class UserModel implements UserInterface {
  public name: string;
  public email: string;
  constructor({ name, email }: UserInterface) {
    this.name = name;
    this.email = email;
  }
}
