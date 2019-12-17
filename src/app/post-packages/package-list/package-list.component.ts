import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Package} from '../../../common/models/package.model';
import {PackageService} from '../../../common/services/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent {
  @Input() packageList: Package[];
  @Output() packageDetail = new EventEmitter<Package>();
  constructor(private packageService: PackageService) {}
  showDetail(item: Package) {
    this.packageDetail.emit(item);
  }
}
