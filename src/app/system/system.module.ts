import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { MailsPageComponent } from './mails-page/mails-page.component';
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientsPageComponent, MailsPageComponent, PostPageComponent]
})
export class SystemModule { }
