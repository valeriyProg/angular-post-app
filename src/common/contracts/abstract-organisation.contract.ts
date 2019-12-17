import {Foundation} from '../models/foundation.model';
import Person from './person.contract';

export default abstract class Organisation implements Foundation {
  public abstract name: string;
  public abstract screen: string;
  public abstract description: string;
  constructor(
    public id: string,
    public type: string,
    public address: string,
    public telephone: string,
    public owner?: string | Organisation | Person
  ) { }
}
