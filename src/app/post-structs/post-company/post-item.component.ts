import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostCompany} from '../../../common/contracts/post-company.contract';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent  {
  @Input() postCompany: PostCompany;
  @Output() postCompanyDetail = new EventEmitter<PostCompany>();
  viewMore(): void {
    this.postCompanyDetail.emit(this.postCompany);
  }
}
