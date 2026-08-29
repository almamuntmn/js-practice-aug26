const status = false;

console.log("Task 1");

// promise defination
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (status) {
      resolve("Task 2");
    } else {
      reject("failed");
    }
  }, 2000);
});

// promise call
promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log("Task 3");
