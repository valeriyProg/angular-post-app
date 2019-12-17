import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import PostOffice from '../../../common/contracts/post-office.contract';
import {PostOfficeService} from '../../../common/services/post-office.service';

@Component({
  selector: 'app-offices-list',
  templateUrl: './offices-list.component.html',
  styleUrls: ['./offices-list.component.scss']
})
export class OfficesListComponent implements OnInit {
  @Input() parentID: string;
  @Output() postOfficeDetail = new EventEmitter<PostOffice>();
  postOfficeList: PostOffice[];
  constructor(private postOfficeService: PostOfficeService) { }

  ngOnInit(): void {
    if (!this.parentID) {
      this.postOfficeList = this.postOfficeService.postOfficesList;
      return;
    }
    if (this.parentID) {
      this.postOfficeList = this.postOfficeService.postOfficesList.filter( (elem, index) => {
        return elem.parent === this.parentID;
      });
    }
  }
  showDetail(item: PostOffice): void {
    this.postOfficeDetail.emit(item);
  }
}
