import {IPackage} from './package-interface';
import {IDepartment} from './department-interface';

export   interface IPostDepartment extends  IDepartment {
  packages: IPackage[];
}
