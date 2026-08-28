// function calculator(a, b, cb) {
//   const sum = a + b;
//   cb(sum);
// }

// // function displayResult (result){
// //     console.log(result)
// // }

// calculator(10, 10, (result) => {
//   console.log(result);
// });

function getQuizMark(mark, cb) {
  setTimeout(() => {
    console.log("Fetched Quiz Mark");
    cb(mark);
  }, 2000);
}

function getClassTestMark(mark, cb) {
  setTimeout(() => {
    console.log("Fetched CT Mark");
    cb(mark);
  }, 3000);
}

function getFinalExamMark(mark, cb) {
  setTimeout(() => {
    console.log("Fetched Final Exam Mark");
    cb(mark);
  }, 4000);
}

function displayTotalMark(quizMark, ctMark, finalMark) {
  const sum = quizMark + ctMark + finalMark;
  console.log(sum);
}

getQuizMark(9, (quizMark) => {
  getClassTestMark(6, (ctMark) => {
    getFinalExamMark(90, (finalMark) => {
      displayTotalMark(quizMark, ctMark, finalMark);
    });
  });
});
