import Person from '../contracts/person.contract';
import Organisation from '../contracts/abstract-organisation.contract';

export  interface Foundation {
  id: string;
  type: string;
  name: string;
  address: string;
  telephone: string;
  owner?: string | Organisation | Person;
  screen?: string;
  description?: string;
}
