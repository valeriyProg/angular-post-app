import {Package} from '../models/package.model';
import {ILogger} from '../interfaces/logger-interface';
import Item from './abstract-item.contract';

export default class Letter extends Item implements Package, ILogger {
  constructor(
    public name: string,
    public screen: string,
    public description: string,
    height: string,
    width: string,
    weight: string,
    public id: string,
    public clientId: string,
    public type: string,
    public price: string,
    public startingPointID: string,
    public destinationPointID: string
  ) {
    super( height, width, weight);
  }
  logData() {
    super.logData();
    console.log(`
      Package Name: ${this.name};
      ID: ${this.id};
      Client ID: ${this.clientId};
      Type:  ${this.type};
      Item Name: ${this.name};
      Description: ${this.description};
      Price: ${this.price};
      Weight: ${this.weight};
      Height: ${this.height};
      Width: ${this.width};
      Starting Point ID: ${this.startingPointID};
      Destination Point ID: ${this.destinationPointID};`
    );
  }
}
