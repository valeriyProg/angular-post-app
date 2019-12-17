import {ILogger} from '../interfaces/logger-interface';
import {PostDepartment} from '../models/post-department.model';
import Person from './person.contract';
import Organisation from './abstract-organisation.contract';
import {PostFoundation} from '../models/post-foundation.model';
import {Client} from '../models/client.model';
import {Package} from '../models/package.model';

export class ItCompany extends Organisation implements  Client, ILogger {
  constructor(
    id: string,
    type: string,
    public name: string,
    address: string,
    telephone: string,
    owner: string | Organisation | Person,
    public screen: string,
    public description: string,
    public category: string = 'company',
    public discount: number= 0.06,
    public items: Package[] = [],
    public sent: Package[] = [],
    public received: Package[] = []
  ) {
    super(id, type, address, telephone, owner);
  }
  logData() {
    console.log(`
      Company: ${this.name};
      ID:  ${this.id} ;
      Type:  ${this.type} ;
      Address:  ${this.address} ;
      Tel:  ${this.telephone} ;
      Owner:  ${this.owner} ;
    `);
  }
}
