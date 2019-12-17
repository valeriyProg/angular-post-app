import {ILogger} from '../interfaces/logger-interface';
import {Package} from '../models/package.model';
import {PostDepartment} from '../models/post-department.model';
import Organisation from './abstract-organisation.contract';

export default class PostOffice extends  Organisation implements  PostDepartment, ILogger {
  constructor(
    id: string,
    type: string,
    public name: string,
    address: string,
    telephone: string,
    public screen: string,
    public description: string,
    public parent: string,
    public packages: Package[] = []
  ) {
    super(id, type, address, telephone);
  }
  logData() {
    console.log(
      '\nPost Department: ' + this.name +
      'ID: ' + this.id + '\n' +
      'Type: ' + this.type + '\n' +
      'Name: ' + this.name + '\n' +
      'Address: ' + this.address + '\n' +
      'Tel: ' + this.telephone + '\n' +
      'Parent Company ID: ' + this.parent + '\n' +
      'Packages Count: ' + this.packages.length + '\n'
    );
  }
}
