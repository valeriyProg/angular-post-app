import {IPackage} from './package-interface';

export interface IClient {
   items: IPackage[];
   sended: IPackage[];
  received: IPackage[];
}
