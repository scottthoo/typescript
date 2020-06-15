import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logTodo(ID, title, finished);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    It is finished? ${completed}
  `);
};

class Color {
  name: string;
}

const red = new Color();
red.name = 'red';

//====================================================================
//                        Annotation
//====================================================================

const apple: number = 2;
// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let myBoolean: boolean[] = [true, false];

class Car {
  name: string;
}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//====================================================================
//                        Annotation Around Functions
//====================================================================

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
// The funcion takes i as arguement and return null(void)
// If do it at the same line, Typescript will help to declare

// When to use annotation?
// 1) Function that returns the 'any' type

const json = '{"x":10,"y":12}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on online and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element == 'red') foundWord = true;
}

// 3) Variable whos type cannot be inferred correctly
let numbers = [-10, -12, 12];
let numAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numAboveZero = numbers[i];
}

//====================================================================
//               Functions
//====================================================================

const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// it might exit half way
function throwError(message: string): never {
  throw new Error(message);
}

function throwError2(message: string): string {
  if (!message) throw new Error(message);
  return message;
}

function throwError3(message: string): void {
  if (!message) throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }) => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeather2 = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
logWeather2(todaysWeather);

//====================================================================
//               Objects
//====================================================================

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// ES2015 destructuring pulling the profile and set types for the profile object

// const age = profile.age;
// const age = profile;
// normal destructuring ( If cases is MUST need to declare)
// const { age }: { age: number } = profile;
// const { coords: { lat, lng } } = profile;
// pull out the coords
// Right after the mirror, put a colon :
// Start to describe the structure of the profile object
// const { coords: { lat, lng } } : {coords:} = profile;
// That's going to be an object
// const {
//   coords: { lat, lng },
// }: { coords: { lat: number; lng: number } } = profile;

// if we want more in one shot!
const {
  age,
  name,
  coords: { lat, lng },
}: {
  age: number;
  name: string;
  coords: {
    lat: number;
    lng: number;
  };
} = profile;
