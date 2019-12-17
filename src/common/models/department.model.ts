import Organisation from '../contracts/abstract-organisation.contract';

export   interface Department {
   parent: Organisation | string;
}
