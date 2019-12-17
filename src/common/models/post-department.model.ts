import {Package} from './package.model';
import {Department} from './department.model';

export   interface PostDepartment extends  Department {
  packages: Package[];
}
