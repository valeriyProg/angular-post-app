import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Person from '../../shared/models/person';
import {PostCompany} from '../../shared/models/post-company';
import Package from '../../shared/models/package';
import PostDepartment from '../../shared/models/post-department';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {
 @Input() item: any;
 @Output() goBack = new EventEmitter<any>();
 @Output() postDepartmentDetail = new EventEmitter<PostDepartment>();

  // @Output() goBack = new EventEmitter<Package | Person | PostCompany>();
  constructor() { }

  ngOnInit() {
    console.log(this.item.departments[0].telephone);
  }
  isClientPerson(): boolean {
    this.item = this.item as Person;
    return this.item instanceof Person;
  }
  isPostCompany(): boolean {
    this.item = this.item as PostCompany;
    return this.item instanceof PostCompany;
  }
  isPackage(): boolean {
    this.item = this.item as Package;
    return this.item instanceof Package;
  }
  isPostDepartment(): boolean {
    this.item = this.item as PostDepartment;
    return this.item instanceof PostDepartment;
  }
  back(): void {
    this.goBack.emit(this.item);
  }
  viewDetail(event: PostDepartment): void {
    this.postDepartmentDetail.emit(event);
  }
}
