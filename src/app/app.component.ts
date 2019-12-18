import {Component, OnInit} from '@angular/core';
import {PostService} from '../common/services/post.service';
import {ClientService} from '../common/services/client.service';
import {PostCompany} from '../common/contracts/post-company.contract';
import PostOffice from '../common/contracts/post-office.contract';
import {Client} from '../common/models/client.model';
import {PostOfficeService} from '../common/services/post-office.service';
import {Package} from '../common/models/package.model';
import {PackageService} from '../common/services/package.service';
import Organisation from '../common/contracts/abstract-organisation.contract';
import {ItCompany} from '../common/contracts/it-company.contract';

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
  // TODO: TEST LIST, TO DELETE.
  organisationsList: Organisation[] = [
    new PostCompany(
      'C0001',
      'Company',
      'Nova Poshta',
      'Stolychne shose str, 103, Kyiv, Ukraine',
      '111-111-11',
      'Mr X.',
      'assets/nova.png',
      'Is a private Ukrainian postal and courier company ' +
      'that provides express delivery of documents, freight and parcels ' +
      'for individuals and businesses. In 2017, the company delivered over ' +
      '145 million shipments, through the company\'s 2300 branches throughout the country.'
    ), new PostCompany(
      'C0002',
      'Company',
      'Ukr Poshta',
      'Franko str, 32, Kyiv, Ukraine',
      '222-222-22',
      'Mr Y.',
      'assets/ukr.png',
      'Is a public company of Ukraine with 100% state ownership ' +
      'due to its strategic importance. In 1999–2015 it was a unitary' +
      ' enterprise of the government of Ukraine.'
    ),
    new ItCompany(
      'CC0001',
      'company',
      'Some IT Company',
      'Karaganda, Some Country',
      '666-666-666',
      'MR ZeRo',
      'assets/microsoft.png',
      'Some it company. Client from long time',
      'corporate clients',
      0.04,
    )
  ];
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
  // TODO: NOT USING IN THIS MOMENT
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



