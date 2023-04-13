/********** דוגמה לעבודה נכונה עם הספרייה **********/
// const FIRST_NUM = document.getElementById("first-num")! as HTMLInputElement;
// const SECOND_NUM = document.getElementById("second-num")! as HTMLInputElement;
// const BTN = document.getElementById("btn")! as HTMLButtonElement;
// const RESULT = document.getElementById("result")! as HTMLSpanElement;

// const sum = (firstNum: number, secondNum: number): number =>
//   firstNum + secondNum;

// const printNum = (firstNum: number, secondNum?: number): void => {
//   if (secondNum) {
//     const sumOnNum = sum(firstNum, secondNum);
//     RESULT.innerHTML = String(sumOnNum);
//     return;
//   }
//   RESULT.innerHTML = String(firstNum);
// };

// BTN.addEventListener("click", () =>
//   printNum(+FIRST_NUM.value, +SECOND_NUM.value)
// );

/********** קוד ללא טייפסקריפט **********/

// const FIRST_NUM = document.getElementById("first-num");
// const SECOND_NUM = document.getElementById("second-num");
// const BTN = document.getElementById("btn");
// const RESULT = document.getElementById("result");
// const sum = (firstNum, secondNum) => firstNum + secondNum;
// const printNum = (firstNum, secondNum) => {
//   if (secondNum) {
//     const sumOnNum = sum(firstNum, secondNum);
//     RESULT.innerHTML = String(sumOnNum);
//     return;
//   }
//   RESULT.innerHTML = String(firstNum);
// };
// BTN.addEventListener("click", () =>
//   printNum(+FIRST_NUM.value, +SECOND_NUM.value)
// );

/********** Literal Type **********/
// const literal: 12 = 12;

// const literal2: { name: "david" } = { name: "david" };
// literal3.age = 50;

// const literal3 = { name: "david" };

// const literal4: null = null;

// console.log(literal);

/********** Core Data Types **********/

// let any: any;
// any = "any";
// any = 0;
// any = true;
// any = {};
// any = [];

// console.log(any);

// let string: string = "I am a string!";
// string = "I am also a string"!;
// string = `Yep i am a string two!`;
// string = 5;

// console.log(string);

// let number: number = 5;
// number = 5.5;
// number = -5;
// number = 0;

// // console.log(number);

// let boolean: boolean = true;
// boolean = false;
// boolean = !!"hallo";
// boolean = Boolean(null);
// boolean = null

// console.log(boolean);

/********** Union Types **********/
// let union: string | number = "hallo";
// union = 5;

// console.log(union);

// const fn = (term: string | number) => {
//   if (typeof term !== "number") return console.log("NaN");
//   console.log("number");
// };

// fn("hallo");
// fn(5);
// fn({ name: "david" });

// console.log(typeof 5);
// console.log(typeof "hallo");
// console.log(typeof false);

// if (typeof "hallo" === "string") console.log("string");

// let x = "hallo";
// x = String(5) ;
// x = 5

// // console.log(typeof x);

// const convertToSting = (item: any) => {
//   return String(item);
// };

// const result = convertToSting(false);

// console.log(result);
// console.log(typeof result);

// let bool = false;
// bool = Boolean("hallo");
// bool = !!"hallo";

// const fn = (i: string) => {
//   console.log(i);
//   return !!i;
// };

// const res = fn(""); // boolean

// console.log(res);

/***** alias or type *****/
// type Combined = string | number | boolean;
// type obj = {
//   x: string;
//   y: number;
// };

// const fn = (
//   item: string | number | boolean,
// ) => item;

// const fn = (item: Combined) => item;

// fn("hallo");
// fn(5);
// fn(false);

/***** type object *****/

// let obj: object = { name: "david", age: 79 };
// console.log(obj);
// console.log(obj.name);

// let obj: object;
// obj = { name: "david", age: 79 };
// console.log(obj);

// const fn = (item: object) => {
//   console.log(item);
// };

// fn({ name: "david" });
// fn({ age: 50 });

// let obj:{name: string; age: number} = {name: "david",age: 45}
// obj.name = "shula"
// obj.age = 45

// let obj = { name: "david", age: 45 };
// obj.name = "shula";
// obj.age = 45;

// let x = "ggg"
// console.log(typeof x);

// const fn = (obj: { name: string; age: number }) => obj;

// fn({ name: "david", age: 5 });

// type Blue = { name: string; age: number };

// const fn = (obj: Blue) => obj;

// fn({ name: "david", age: 5 });

/***** optional keys in object *****/
// let obj: { name: string; age?: number };
// obj = { name: "david", age: 5 };
// obj = { name: "david" };
// obj = { age: 5 };

// type ob = { name: string; age?: number };

// const fn = (obj: ob) => obj;

// const x = fn({ name: "david" }); // { name: "david" }
// const y = fn({ name: "david", age: 55 }); // { name: "david", age: 55 }

/***** exe object *****/
// type ob = { color?: string; wheels: number; type?: string };

// const fn = (obj: ob) => {
//   const { color, wheels, type } = obj;
//   if (!color){
//     if(!type) return `${wheels}`
//      return `${wheels} ${type}`;
//     }

//   if (!type) return `${color} ${wheels}`;
//   return `${color} ${wheels} ${type}`;
// };

// type ob = { color?: string; wheels: number; type?: string };

// const fn = ({ color, wheels, type }: ob) => {
//   if (!color) {
//     return !type ? `${wheels}` : `${wheels} ${type}`;
//   }
//   return !type ? `${color} ${wheels}` : `${color} ${wheels} ${type}`;
// };

// const fn = ({ color, wheels, type }: ob) => {
//   return `${wheels} ${color ? color : ""} ${type ? type : ""}`.trim();
// };

// const car = fn({ color: "red", wheels: 4, type: "nisan" });
// console.log(car);
// const car2 = fn({ color: "red", wheels: 4 });
// console.log(car2);
// const car3 = fn({ wheels: 4 });
// console.log(car3);

/***** interface *****/

// interface User {
//   name: string;
//   age: number;
//   createdAt?: string;
// }

// const fn = (user: User) => user;

// const user = {
//   name: "david",
//   age: 207,
//   //   createdAt: "dkdkdkd54649"
// };

// const result = fn(user);

// console.log(result);

/***** interface in interface *****/

// interface Name {
//   first: string;
//   last: string;
// }

// interface User {
//   name: Name;
//   age?: number;
// }

// const fn = (user: User) => user;

// const user = {
//   name: { first: "david", last: "yakin" },
//   age: 5,
// };

// const result = fn(user);

// console.log(result);

/***** arrays *****/
// const array = ["one", 2, "three"];
// array.push("hallo");
// array.push(65);
// array.push(false);

// const array = [];
// array.push("hallo");
// array.push(65);
// array.push(false);

// console.log(array);

// const fn = (array = []) => array;

// const result = fn();
// const result2 = fn(["one", "two"]);

// console.log(result);
// console.log(result2);

// const fn = (array: string[]) => array;

// const result = fn(["one", "two", "three"]);

// console.log(result);

// const fn = (array: (number | string)[]) => array;

// const result = fn(["one", 5, "three"]);

// console.log(result);

// let x: string[] = [];

// const fn = (array: (number | string)[] = []) => array;

// // const result = fn();
// const result = fn(["one", 5]);

// console.log(result);

/***** generic *****/

// const fn = (array: Array<string>) => array;

// const result = fn(["one"]);

// console.log(result);

// const fn = (array: Array<string | number>) => array;

// const result = fn(["one", 5]);

// console.log(result);

/********** Alias / type **********/

// type combined = string | number | boolean;

// let text: combined = "hallo";
// text = 5;
// text = false;

// console.log(text);

/********** Object **********/
// const object: object = { age: 43, hear: "black" };
// object.name = "david";
// object.age = 50;

/********** הגדרת המפתחות והערכים שלהם  **********/

// const obj: { name: string; age: number } = { name: "shola", age: 79 };

// obj.name = "david";
// obj.name = "other name";

/********** ערכים אופציונאליים  **********/

// const obj: { name?: string; age?: number } = {};

// obj.name = "david";
// obj.name = "other name";

// console.log(obj);

// obj.key = "Not allowed in TS but you can ignore the typescript errors";
// console.log(obj);

/********** interface **********/
// interface user {
//   name: string;
//   age: number;
// }

// const user: user = {
//   name: "david",
//   age: 43,
// };

/********** interface of interface **********/
// interface address {
//   state?: string;
//   country: string;
//   city: string;
//   street: string;
//   houseNumber: number;
//   zip: number;
// }

// interface user {
//   name: string;
//   age: number;
//   address?: address;
//   createdAt: Date;
// }

// const user: user = {
//   name: "david",
//   age: 43,
//   address: {
//     country: "israel",
//     street: "bla bla street",
//     city: "jerusalem",
//     houseNumber: 50,
//     zip: 123456,
//   },
//   createdAt: new Date(),
// };

// console.log(user);
// user.key = "Not allowed!"

/********** Enums **********/
/* https://www.typescriptlang.org/docs/handbook/enums.html */

// enum Print {
//   BOOK = 1,
//   NEWSPAPER,
//   MAGAZINE,
// }

// interface publisher {
//   name: string;
//   resource: Print;
// }

// const publicist: publisher = {
//   name: "david",
//   resource: Print.BOOK,
// };

// console.log(publicist);

/********** Array **********/
// const array: string[] = ["one", "two"];
// array.push("three");

// const secondArray: object[] = [{}, {}];

// console.log(array);

/********** Array of interfaces **********/
// interface user {
//   name: string;
//   age: number;
// }

// const user: user = {
//   name: "david",
//   age: 43,
// };

// const array: user[] = [{ name: "shalom", age: 16 }];

// array.push(user);
// console.log(array);

/********** Generic **********/
// const array: Array<string> = ["one", "two"];

// interface user {
//   name: string;
//   age: number;
// }

// const generic: Array<user> = [
//   { name: "david", age: 43 },
//   { name: "shalom", age: 16 },
// ];

/********** union array **********/
// const array: (string | number)[] = ["one", 2, 3, "four"];
// const secondArray: Array<string | number> = ["one", 2, 3, "four"];

// type combined = string | number | boolean;
// const thirdArray: Array<combined> = [1, "one", true];

/********** Tuple **********/
// const tuple: [string, number] = ["hello", 10];
// tuple.push("two");
// tuple.push(true);

// const secondTuple: [string, number, boolean] = ["hello", 10, false];

/********** functions **********/
// const fn :Function = ()=>{}
// const fn = () => {};
// const fn: Function = (data: string) => data;
// const fn = (data:string)=>data

/********** function return **********/
// const fn = (text: string): number => +text;
// const fn = (text: string): number => Number(text);
// const fn = (text: string): number => {
//   return +text;
// };

// const fn = (text: string, num?: number): string => {
//   if (!num) return text;
//   return text + num;
// };

// const x = fn("hallo ", 5);

// console.log(x);

/********** function default **********/
// const fn = (text: string, num: number = 1): string => text + num;

/********** function return void **********/
// const fn = (text: string | null): string | void | null => {
//   if (text) return text;
//   if (text === null) return null;
// };

// const x = fn("");
// console.log(x);
// const y = fn(null);
// console.log(y);
// const z = fn("hallo");
// console.log(z);

// const x = fn("x ");
// console.log(x);

// const y = fn("y ", 500);
// console.log(y);

// const z = fn("z ", false);
// console.log(z);

// const fn = (text: string) => +text;

// const x = fn("5");

// console.log(typeof x);

/********** initial function **********/
// let fn: (x: number) => number;

// fn = data => {
//     console.log(data);
//     return data;
// };

// fn = num => num;

// fn(5);

/********** type initial  function **********/
// type Demo = (data: string) => void;

// const fn = (text: string, cb: Demo) => cb(text);

// fn("hallo", console.log);

/********** TS DOM **********/
// const FIRST_NUM = document.getElementById("first-num")! as HTMLInputElement;
// const SECOND_NUM = document.getElementById("second-num")! as HTMLInputElement;
// const BTN = document.getElementById("btn")! as HTMLButtonElement;
// const RESULT = document.getElementById("result")! as HTMLSpanElement;

// const sum = (firstNum: number, secondNum: number) => firstNum + secondNum;

// const printNum = (firstNum: number, secondNum?: number) => {
//   if (secondNum) {
//     const sumOnNum = sum(firstNum, secondNum); // number
//     RESULT.innerHTML = `${sumOnNum}`;
//     return;
//   }
//   RESULT.innerHTML = String(firstNum);
// };

// BTN.addEventListener("click", () =>
//   printNum(+FIRST_NUM.value, +SECOND_NUM.value)
// );
