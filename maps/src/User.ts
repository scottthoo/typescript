import faker from 'faker';
import { Mappable } from './CustomMap';

// export default no need {} and u can put any name
// it might confusing
// Avoid default if can.

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `Username : ${this.name}`;
  }
}
