import {IOrganisation} from './interfaces/organisation-interface';
import {ILogger} from './interfaces/logger-interface';
import {IPerson} from './interfaces/person-interface';

export default abstract class Organisation implements IOrganisation, ILogger {
  constructor(
    public id: string,
    public type: string,
    public name: string,
    public address: string,
    public telephone: string,
    public screen?: string,
    public description?: string,
    public owner?: string | IOrganisation | IPerson
  ) { }
  logData() {
    console.log(
      '\nCompany: ' + this.name +
      'ID: ' + this.id + '\n' +
      'Type: ' + this.type + '\n' +
      'Address: ' + this.address + '\n' +
      'Tel: ' + this.telephone + '\n' +
      this.owner ? 'Owner: ' + this.owner + '\n' : ''
    );
  }
}
