import {IPerson} from './interfaces/person-interface';
import {ILogger} from './interfaces/logger-interface';
import {IPackage} from './interfaces/package-interface';
import {IClient} from './interfaces/client-interface';

export default class Person implements IPerson, IClient, ILogger {
  constructor(
    public name: string,
    public id: string,
    public age: number,
    public category: string,
    public address: string,
    public telephone: string,
    public discount: number | boolean,
    public screen: string,
    public description: string,
    public items: IPackage[] = [],
    public sended: IPackage[] = [],
    public received: IPackage[] = []
  ) {}
  logData() {
    console.log(
      '\nPerson client: ' + this.name +
      'ID: ' + this.id + '\n' +
      'Age: ' + this.age + '\n' +
      'Category: ' + this.category + '\n' +
      'Discount: ' + this.discount + '\n' +
      'Address: ' + this.address + '\n' +
      'Tel: ' + this.telephone + '\n' +
      'Description: ' + this.description + '\n' +
      'Packages Count: ' + this.items.length + '\n' +
      (this.sended.length > 0 ? ('Sended: ' + this.sended.length +  '\n') : '') +
      (this.received.length > 0 ? ('Received: ' + this.received.length +  '\n') : '')
    );
  }
}
