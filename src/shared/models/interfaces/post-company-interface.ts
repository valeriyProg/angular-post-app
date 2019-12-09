import {IDepartment} from './department-interface';
import {IOrganisation} from './organisation-interface';
import {PostCompany} from '../post-company';

export  interface IPostCompany {
  departments: IDepartment[];
  createDepartment: (department: IOrganisation) => PostCompany;
}
