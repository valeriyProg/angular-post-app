import {IPostDepartment} from './interfaces/post-department-interface';
import {ILogger} from './interfaces/logger-interface';
import {IOrganisation} from './interfaces/organisation-interface';
import {IPackage} from './interfaces/package-interface';
import Organisation from './organisation';
import {PostCompany} from './post-company';

export default class PostDepartment extends  Organisation implements  IPostDepartment, ILogger {
  constructor(
    id: string,
    type: string,
    name: string,
    address: string,
    telephone: string,
    screen: string,
    description: string,
    public parent: PostCompany,
    public packages: IPackage[] = []
  ) {
    super(id, type, name, address, telephone, screen, description);
  }
  logData() {
    console.log(
      '\nPost Department: ' + this.name +
      'ID: ' + this.id + '\n' +
      'Type: ' + this.type + '\n' +
      'Name: ' + this.name + '\n' +
      'Address: ' + this.address + '\n' +
      'Tel: ' + this.telephone + '\n' +
      'Parent Company: ' + this.parent.name + '\n' +
      'Packages Count: ' + this.packages.length + '\n'
    );
  }
}
