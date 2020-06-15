interface Vehicle2 {
  name: string;
  year: number;
  broken: boolean;
  summary(): string; // function that return a string
}

const oldCivic: Vehicle2 = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return this.name;
  },
};

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }) => {
const printVehicle = (vehicle: Vehicle2): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

// General Strategy for Reusable Code in TS
// - Create functions that accept arguments that are typed with interfaces
// - Object/classes can decide to 'implement' a given interface to work with a function.
