import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import { ClientListComponent } from './post-clients/client-list/client-list.component';
import { PackageListComponent } from './post-packages/package-list/package-list.component';
import { PostListComponent } from './post-structs/post-list/post-list.component';
import {PostItemComponent} from './post-structs/post-company/post-item.component';
import {ClientItemComponent} from './post-clients/client-item/client-item.component';
import {PackageItemComponent} from './post-packages/package-item/package-item.component';
import {ItemInfoComponent} from './item-detail/item-info.component';
import {OfficesListComponent} from './post-structs/offices-list/offices-list.component';
import {PostOfficeComponent} from './post-structs/post-office/post-office.component';
import {PostOfficeService} from '../common/services/post-office.service';
import {PostService} from '../common/services/post.service';
import {ClientService} from '../common/services/client.service';
import {PackageService} from '../common/services/package.service';
import { PostCompanyDetailComponent } from './post-company-detail/post-company-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostOfficeComponent,
    ClientItemComponent,
    PackageItemComponent,
    ItemInfoComponent,
    ClientListComponent,
    PackageListComponent,
    PostListComponent,
    OfficesListComponent,
    PostCompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [PostOfficeService, PostService, ClientService, PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
