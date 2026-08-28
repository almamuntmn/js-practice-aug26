let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 Resolved");
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 Resolved");
  }, 2000);
});


p1.then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
});

p2.then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
});
