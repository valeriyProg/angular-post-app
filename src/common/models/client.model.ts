import {Package} from './package.model';

export interface Client {
  id: string;
  category: string;
  name: string;
  address: string;
  telephone: string;
  discount: number | boolean;
  screen: string;
  description: string;
  items: Package[];
  sent: Package[];
  received: Package[];
}
