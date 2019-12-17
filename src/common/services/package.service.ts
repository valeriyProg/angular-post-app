import { Injectable } from '@angular/core';
import {Package} from '../models/package.model';
import Letter from '../contracts/letter.contract';
import Box from '../contracts/box.contract';
import Wrapper from '../contracts/wrapper.contract';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  packageList: Package[]  = [
    new Letter (
      'MyLetter1',
      'assets/letter-ico.jpg',
      'Very important letter for my dog!',
      '0.04',
      '0.3',
      '0.044',
      'PL0001',
      'HB0001',
      'letter',
      '0.66',
      'CD0001-00',
      'CD0001-01'
    ),
    new Wrapper (
      'Wrapper 1',
      'assets/wrapper.jpg',
      'Constitution of Ukraine wrapper',
      '0.07',
      '0.20',
      '0.220',
      'PW0001',
      'HB0001',
      'wrapper',
      '1.2',
      'CD0001-01',
      'CD0002-00'
    ),
    new Box (
      ' Package Box 2',
      ' assets/box.jpg',
      'Empty box',
      '0.4',
      '0.3',
      '1.2',
      'PB0001',
      'HB0001',
      'box',
      '30',
      'CD0002-00',
      'CD0002-01'),
  ];
  constructor() { }
  add(pack?: Package): void {
    if (!pack) {
      // TODO: TEST FUNCTIONAL, TO DELETE IN FUTURE
      this.packageList.push(
        new Box (
          ' Package Box 3',
          ' assets/box.jpg',
          'Empty box',
          '0.4',
          '0.3',
          '1.2',
          'PB0002',
          'HB0001',
          'box',
          '30',
          'CD0001-01',
          'CD0001-00'),
      );
      return;
    }
    this.packageList.push(pack);
  }
  remove(pack?: Package): void {
    if (pack) {
      try {
        const index = this.packageList.indexOf(pack);
        this.packageList.splice(index, 1);
        return;
      } catch  {
        console.log('Item not found');
      }
    }
    if (!pack ) {
      try {
        this.packageList.splice(this.packageList.length - 1, 1);
      } catch  {
        console.log('Error');
      }
    }
  }
}
