import {PostDepartment} from './post-department.model';
import {Foundation} from './foundation.model';

export  interface PostFoundation extends Foundation{
  departments: PostDepartment[];
}
