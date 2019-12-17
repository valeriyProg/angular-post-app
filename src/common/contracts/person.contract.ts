import {Client} from '../models/client.model';
import {ILogger} from '../interfaces/logger-interface';
import {Package} from '../models/package.model';
import {Human} from '../models/human.model';

export default class Person implements Human, Client, ILogger {
  constructor(
    public name: string,
    public id: string,
    public sex: string,
    public age: number,
    public passport: string,
    public category: string,
    public address: string,
    public telephone: string,
    public discount: number | boolean,
    public screen: string,
    public description: string,
    public items: Package[] = [],
    public sent: Package[] = [],
    public received: Package[] = []
  ) {}
  logData() {
    console.log(`
      Person client: ${this.name};
      ID: ${this.id};
      Age: ${this.age};
      Category: ${this.category};
      Discount: ${this.discount};
      Address: ${this.address};
      Tel: ${this.telephone};
      Description: ${this.description};
      Packages Count: ${this.items.length};
      ${(this.sent.length > 0 ? ('Sent packages: ' + this.sent.length +  '\n') : '')}
      ${(this.received.length > 0 ? ('Received packages: ' + this.received.length +  '\n') : '')}
    `);
  }
}
