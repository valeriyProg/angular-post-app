import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostItemComponent } from './post-item/post-item.component';
import { PostDepartmentComponent } from './post-department/post-department.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import { ClientItemComponent } from './client-item/client-item.component';
import { PackageItemComponent } from './package-item/package-item.component';
import { ItemInfoComponent } from './item-info/item-info.component';


@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostDepartmentComponent,
    ClientItemComponent,
    PackageItemComponent,
    ItemInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
