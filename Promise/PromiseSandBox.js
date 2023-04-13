/*********** call back hell Test **********/
// console.log(1);

// setTimeout(() => {
//   setTimeout(() => {
//     console.log(3);
//   });

//   console.log(2);
// }, 3000);

// setTimeout(() => {
//   console.log(4);
// }, 2000);

// setTimeout(() => {
//   console.log(5);
// }, 0);

// console.log(6);

/*********** call back  **********/
// const x = () => 5;

// const fn = cb => {
//   return cb();
// };

// const result = fn(x);
// console.log(result);

/*********** Promise syntax **********/
// const promise = new Promise()
// promise.then().catch().finally()

/*********** הבטחה שלא מעבירה ערכים **********/
// const promise = new Promise((resolve, reject) => {
//   const random = Math.round(Math.random() * 10);
//   console.log(random);

//   if (random < 5) return resolve();
//   reject();
// });

// promise
//   .then(() => {
//     console.log("resolve");
//   })
//   .catch(() => {
//     console.log("reject");
//   });

// /*********** הבטחה שמעבירה ערכים **********/
// const promise = new Promise((resolve, reject) => {
//   const random = Math.round(Math.random() * 10);
//   console.log(random);

//   if (random < 5) return resolve("resolve!!!");
//   reject("reject!!!");
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*********** פונקציה שמחזירה הבטחה **********/
// const promiseFn = () => {
//   return new Promise((resolve, reject) => {
//     const random = Math.round(Math.random() * 10);
//     console.log(random);
//     return random < 5 ? resolve() : reject();
//   });
// };

// promiseFn()
//   .then(() => {
//     console.log("resolve");
//   })
//   .catch(() => {
//     console.log("reject");
//   });

/*********** פונקציה בתוך אובייקט שמחזירה הבטחה **********/
// const obj = {
//   moshe() {
//     return new Promise((resolve, reject) => {
//       const random = Math.round(Math.random() * 10);
//       console.log(random);
//       return random < 5 ? resolve() : reject();
//     });
//   },
// };

// const { moshe } = obj;
// // const moshe = obj.moshe
// // moshe()

// moshe()
//   .then(() => {
//     console.log("resolve");
//   })
//   .catch(() => {
//     console.log("reject");
//   });

/*********** פונקציה שמחזירה הבטחה **********/
// const BTN = document.getElementById("btn");

// const promise = () => {
//   return new Promise((resolve, reject) => {
//     const random = Math.round(Math.random() * 10);
//     return random < 5 ? resolve() : reject();
//   });
// };

// const getPromise = () => {
//   promise()
//     .then(() => {
//       console.log("resolve");
//     })
//     .catch(() => {
//       console.log("reject");
//     });
// };

// BTN.addEventListener("click", getPromise);

/*********** async await **********/
// const promise = () => {
//   return new Promise((resolve, reject) => {
//     const random = Math.round(Math.random() * 10);
//     console.log(random);
//     return random <= 5 ? resolve("resolve") : reject("reject");
//   });
// };

// const getPromise = async () => {
//   promise()
//     .then(data => {
//       console.log(data);
//       promise()
//         .then(data2 => {
//           console.log(data2);
//           promise()
//             .then(data3 => {
//               console.log(data3);
//             })
//             .catch(err => {
//               console.log(err);
//             });
//         })
//         .catch(error2 => {
//           console.log(error2);
//         });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// const getPromise = async () => {
//   try {
//     const data = await promise();
//     console.log(data);

//     const data2 = await promise();
//     console.log(data2);

//     const data3 = await promise();
//     console.log(data3);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getPromise();

/*********** fetch function **********/
// const fetchData = async () => {
//   try {
//     const response = await fetch("./db/usersDb.json");
//     // console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchData();

/***** Promise shortcut ******/
// const resolve = Promise.resolve("in resolve");
// const reject = Promise.reject("in reject");

// resolve.then(data => console.log(data));
// reject.catch(error => console.log(error));

/***** pending ******/
// const resolve = Promise.resolve("in resolve");
// console.log(resolve);
