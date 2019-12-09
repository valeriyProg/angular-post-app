import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostCompany} from '../../shared/models/post-company';
import Package from '../../shared/models/package';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.scss']
})
export class PackageItemComponent implements OnInit {
  @Input() package;
  @Output() packageDetail = new EventEmitter<Package>();

  constructor() { }

  ngOnInit() {
  }
  viewMore(): void {
    this.packageDetail.emit(this.package);
  }
}
