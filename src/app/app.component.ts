import {Component, OnInit} from '@angular/core';
import {PostService} from '../common/services/post.service';
import {ClientService} from '../common/services/client.service';
import {PostCompany} from '../common/contracts/post-company.contract';
import PostOffice from '../common/contracts/post-office.contract';
import {Client} from '../common/models/client.model';
import {PostOfficeService} from '../common/services/post-office.service';
import {Package} from '../common/models/package.model';
import {PackageService} from '../common/services/package.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  postCompanyList: PostCompany[];
  postDepartmentList: PostOffice[];
  clientsList: Client[];
  packageList: Package[];
  showPostList = true;
  showClientList = false;
  showPackageList = false;
  showPostOfficesList = false;
  itemToDetail: PostCompany | PostOffice | Client | Package ;
  constructor(
    private postService: PostService,
    private postOfficeService: PostOfficeService,
    private clientService: ClientService,
    private packageService: PackageService
  ) { }
  ngOnInit(): void {
    this.postCompanyList = this.postService.postCompanyList;
    this.postDepartmentList = this.postOfficeService.postOfficesList;
    this.clientsList = this.clientService.clientList;
    this.packageList = this.packageService.packageList;
  }
  postCompanyDetail(event: PostCompany ) {
    this.hideAllList();
    this.itemToDetail = event;
  }
  // TODO: NOT USES IN THIS MOMENT
  // postOfficeDetail(event: PostOffice) {
  //   this.hideAllList();
  //   this.itemToDetail = event;
  // }
  // clientDetail(event: Client) {
  //   this.hideAllList();
  //   this.itemToDetail = event;
  // }
  // packageDetail(event: Package) {
  //   this.hideAllList();
  //   this.itemToDetail = event;
  // }
  //
  hideAllList() {
    this.showPostList = false;
    this.showClientList = false;
    this.showPackageList = false;
    this.showPostOfficesList = false;
    this.itemToDetail = undefined;
  }
}



