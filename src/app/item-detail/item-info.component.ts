import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostCompany} from '../../common/contracts/post-company.contract';
import PostOffice from '../../common/contracts/post-office.contract';
import {Package} from '../../common/models/package.model';
import {Client} from '../../common/models/client.model';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent {
  @Input() item: PostCompany| PostOffice | Package | Client ;
  @Output() showList = new EventEmitter<PostCompany| PostOffice | Package | Client>();
  @Output() showDetail = new EventEmitter<PostCompany| PostOffice | Package | Client>();

  viewDetail(event: PostCompany| PostOffice | Package | Client): void {
    this.showDetail.emit(event);
  }
}
