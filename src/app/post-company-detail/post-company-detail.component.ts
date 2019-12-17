import {Component, Input, OnInit} from '@angular/core';
import {PostCompany} from '../../common/contracts/post-company.contract';

@Component({
  selector: 'app-post-company-detail',
  templateUrl: './post-company-detail.component.html',
  styleUrls: ['./post-company-detail.component.scss']
})
export class PostCompanyDetailComponent  {
  @Input() postCompany: PostCompany;
}
