import { Component } from '@angular/core';
import {clientItemsData, postItemsData} from '../shared/models/DATA';
import {PostCompany} from '../shared/models/post-company';
import Person from '../shared/models/person';
import Package from '../shared/models/package';
import PostDepartment from '../shared/models/post-department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showPostList = true;
  showClientList = false;
  showPackList = false;
  selectedItem = false;
  viewItem: any;
  postItems = postItemsData;
  clientItems = clientItemsData;

  showList(event: Event) {
    if (event.target instanceof HTMLElement) {
      const target = event.target as HTMLElement;
      switch (target.id) {
        case 'post-btn':
          this.showPostList = true;
          this.showClientList = false;
          this.showPackList = false;
          this.viewItem = undefined;
          break;
        case 'client-btn':
          this.showClientList = true;
          this.showPackList = false;
          this.showPostList = false;
          this.viewItem = undefined;
          break;
        case 'pack-btn':
          this.showPackList = true;
          this.showClientList = false;
          this.showPostList = false;
          this.viewItem = undefined;
          break;
        default: break;
      }
    } else {
      if (event instanceof PostCompany) {
        this.showPostList = true;
        this.showClientList = false;
        this.showPackList = false;
        this.viewItem = undefined;
      } else if (event instanceof Package) {
        this.showPostList = false;
        this.showClientList = false;
        this.showPackList = true;
        this.viewItem = undefined;
      } else if (event instanceof Person) {
        this.showPostList = false;
        this.showClientList = true;
        this.showPackList = false;
        this.viewItem = undefined;
      } else {
        this.showPostList = true;
        this.showClientList = false;
        this.showPackList = false;
        this.viewItem = undefined;
      }
    }

  }
  showItemInfo(item: any) {
    if (item instanceof PostCompany) {
      this.viewItem = item as PostCompany;
    } else if (item instanceof Person) {
      this.viewItem = item as Person;
    } else if (item instanceof PostDepartment) {
      this.viewItem = item as PostDepartment;
    } else {
      this.viewItem = item as Package;
    }
    this.showPostList = false;
    this.showClientList = false;
    this.showPackList = false;
  }
}
