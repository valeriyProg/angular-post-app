import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import PostOffice from '../../../common/contracts/post-office.contract';

@Component({
  selector: 'app-post-office',
  templateUrl: './post-office.component.html',
  styleUrls: ['./post-office.component.scss']
})
export class PostOfficeComponent  {
  @Input() office: PostOffice;
  @Output() postOfficeDetail = new EventEmitter<PostOffice>();

  viewMore(): void {
    this.postOfficeDetail.emit(this.office);
  }
}
