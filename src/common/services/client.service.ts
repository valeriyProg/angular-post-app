import { Injectable } from '@angular/core';
import {Client} from '../models/client.model';
import Person from '../contracts/person.contract';
import {ItCompany} from '../contracts/it-company.contract';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientList: Client[] = [
    new Person(
      'Ivan Ivanov',
      'HB0001',
      'male',
      33,
      'HB0000',
      'individual',
      'Zavodska str, 4/1, Khmelnytskyi, Ukraine',
      '093-102-120-11-11',
      0.03,
      'assets/person1.jpg',
      'Person #1 description'
    ),
    new Person(
      'Petrov Sidiriv',
      'HB0002',
      'male',
      41,
      'HB0001',
      'individual',
      'Trudova str, 14, Khmelnytskyi, Ukraine',
      '055-155-177-16-551',
      0.05,
      'assets/person2.jpg',
      'Person #2 description'
    ), new Person(
      'Sergiy Ivanovych',
      'HB0003',
      'male',
      22,
      'HB0002',
      'individual',
      'Tovstogo str, 38/2, Khmelnytskyi, Ukraine',
      '045-178-157-11-50',
      0.055,
      'assets/person3.jpg',
      'Person #3 description'
    ),
    new ItCompany(
      'CC0001',
      'company',
      'Some IT Company',
      'Karaganda, Some Country',
      '666-666-666',
      'MR ZeRo',
      'assets/microsoft.png',
      'Some it company. Client from long time',
      'corporate clients',
      0.04,
    )
  ];
  add(client?: Client): void {
    if (!client) {
      this.clientList.push(
        new ItCompany(
          'CC0001',
          'company',
          'Some IT Company',
          'Karaganda, Some Country',
          '666-666-666',
          'MR ZeRo',
          'assets/microsoft.png',
          'Some it company. Client from long time',
          'corporate clients',
          0.04,
        )
      );
      return;
    }
    this.clientList.push(client);
  }
  remove(client?: Client): void {
    if (client) {
      try {
        const index = this.clientList.indexOf(client);
        this.clientList.splice(index, 1);
        return;
      } catch  {
        console.log('Item not found');
      }
    }
    if (!client) {
      try {
        this.clientList.splice(this.clientList.length - 1, 1);
      } catch   {
        console.log('Error');
      }
    }
  }
}
