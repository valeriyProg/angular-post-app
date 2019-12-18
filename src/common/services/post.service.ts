import { Injectable } from '@angular/core';
import {PostCompany} from '../contracts/post-company.contract';
import Organisation from '../contracts/abstract-organisation.contract';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postCompanyList = [
    new PostCompany(
      'C0001',
      'Company',
      'Nova Poshta',
      'Stolychne shose str, 103, Kyiv, Ukraine',
      '111-111-11',
      'Mr X.',
      'assets/nova.png',
      'Is a private Ukrainian postal and courier company ' +
      'that provides express delivery of documents, freight and parcels ' +
      'for individuals and businesses. In 2017, the company delivered over ' +
      '145 million shipments, through the company\'s 2300 branches throughout the country.'
    ), new PostCompany(
      'C0002',
      'Company',
      'Ukr Poshta',
      'Franko str, 32, Kyiv, Ukraine',
      '222-222-22',
      'Mr Y.',
      'assets/ukr.png',
      'Is a public company of Ukraine with 100% state ownership ' +
      'due to its strategic importance. In 1999–2015 it was a unitary' +
      ' enterprise of the government of Ukraine.'
    )
  ];

  constructor() { }
  add(postCompany?: PostCompany): void {
    if (!postCompany) {
      // TODO: TEST FUNCTIONAL, TO DELETE IN FUTURE
      this.postCompanyList.push(
        new PostCompany(
          'C0001',
          'Company',
          'Nova Poshta',
          'Stolychne shose str, 103, Kyiv, Ukraine',
          '111-111-11',
          'Mr X.',
          'assets/nova.png',
          'Is a private Ukrainian postal and courier company ' +
          'that provides express delivery of documents, freight and parcels ' +
          'for individuals and businesses. In 2017, the company delivered over ' +
          '145 million shipments, through the company\'s 2300 branches throughout the country.'
        )
      );
      return;
    }
    this.postCompanyList.push(postCompany);
  }
  remove(postCompany?: PostCompany): void {
    if (postCompany) {
      try {
        const index = this.postCompanyList.indexOf(postCompany);
        this.postCompanyList.splice(index, 1);
        return;
      } catch  {
        console.log('Item not found');
      }
    }
    if (!postCompany) {
      try {
        this.postCompanyList.splice(this.postCompanyList.length - 1, 1);
      } catch {
        console.log('Error');
      }
    }
  }
}
