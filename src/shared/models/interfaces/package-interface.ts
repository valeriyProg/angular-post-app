import {IPerson} from './person-interface';
import {ILogger} from './logger-interface';
import {IOrganisation} from './organisation-interface';
import {IPostDepartment} from './post-department-interface';

export interface IPackage {
  client: IOrganisation | IPerson;
  startingPoint: IPostDepartment;
  destinationPoint: IPostDepartment;
  name: string;
  height: string;
  width: string;
  weight: string;
  price: string;
  type: string;
  screen: string;
  description: string;
}
