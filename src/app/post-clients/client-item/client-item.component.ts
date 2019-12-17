import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from '../../../common/models/client.model';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent  {
  @Input() client: Client;
  @Output() clientDetail = new EventEmitter<Client>();


  viewDetail(): void {
    this.clientDetail.emit(this.client);
  }
}
