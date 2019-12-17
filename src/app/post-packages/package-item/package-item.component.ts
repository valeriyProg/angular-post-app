import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Package} from '../../../common/models/package.model';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.scss']
})
export class PackageItemComponent {
  @Input() package: Package;
  @Output() packageDetail = new EventEmitter<Package>();
  viewMore(): void {
    this.packageDetail.emit(this.package);
  }
}
