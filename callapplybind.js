// Call apply and bind

function calcMarksAvg(history, economics) {
  const avg =
    (this.bangla + this.english + this.math + history + economics) / 5;
  console.log(avg);
}

let student = {
  name: "Mamun",
  age: 32,
  bangla: 80,
  english: 85,
  math: 70,
};

calcMarksAvg.call(student, 75, 80);
calcMarksAvg.apply(student, [75, 80]);
let bindResult = calcMarksAvg.bind(student);

 bindResult(75,90)

