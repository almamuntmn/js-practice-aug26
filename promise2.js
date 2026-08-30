const paymentSuccess = true;
const marks = 80;

function enroll() {
  console.log("Course enrolment is progressing");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("payment failed");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("course on progress");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("failed");
      }
    }, 3000);
  });
  return promise;
}

function getCertificate() {
  console.log("certificate pending");
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Congratulations Your is Certificate Ready");
    }, 1000);
  });
  return promise;
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
