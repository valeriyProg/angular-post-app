import {ILogger} from '../interfaces/logger-interface';

export default abstract class Item implements  ILogger {
  public abstract name: string;
  public abstract screen: string;
  public abstract description: string;
  constructor(
    public height: string,
    public width: string,
    public weight: string
  ) { }
  logData() {
    console.log(`
      'Name: ${this.name};
      'Description: ${this.description};
      'Weight: ${this.weight};
      'Height: ${this.height};
      'Width: ${this.width};
    `);
  }
}
