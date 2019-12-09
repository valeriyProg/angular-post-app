import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import PostDepartment from '../../shared/models/post-department';
import {PostCompany} from '../../shared/models/post-company';

@Component({
  selector: 'app-post-department',
  templateUrl: './post-department.component.html',
  styleUrls: ['./post-department.component.scss']
})
export class PostDepartmentComponent implements OnInit {
  @Input() department: PostDepartment;
  @Output() postDetail = new EventEmitter<PostDepartment>();

  constructor() { }

  ngOnInit() {
  }
  viewMore(): void {
    this.postDetail.emit(this.department);
  }
}
