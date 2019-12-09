import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostCompany} from '../../shared/models/post-company';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() postItem: PostCompany;
  @Output() postDetail = new EventEmitter<PostCompany>();
  constructor() { }

  ngOnInit() {
  }
  viewMore(): void {
    this.postDetail.emit(this.postItem);
  }
}
