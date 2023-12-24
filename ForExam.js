class ForExam {
  constructor() {
    this.initData();
  }

  initData() {
    const config = {
      baseArray: ["피카츄", "라이츄", "꼬부기"],
      specialProblems: [10, 16, 17, 18, 19, 20],
      htmlTagProblems: [22, 23, 25, 27, 29, 30],
      startProblemIndex: 1,
      endProblemIndex: 30,
    };

    for (let i = config.startProblemIndex; i <= config.endProblemIndex; i++) {
      this["problem" + i] = this.generateProblemData(
        i,
        config.baseArray,
        config.specialProblems
      );
    }

    this.problem16 = [
      ["피카츄", "라이츄"],
      ["꼬부기", "이브이"],
    ];

    this.assembleHTMLTags(config.htmlTagProblems);
  }

  generateProblemData(problemNumber, baseArray, specialProblems) {
    if (specialProblems.includes(problemNumber)) {
      return [...baseArray, "이브이"];
    }
    return baseArray.slice();
  }

  assembleHTMLTags(htmlTagProblems) {
    for (let problem of htmlTagProblems) {
      this["problem" + problem] = this["problem" + problem].map((item) => {
        if (item.includes("<")) {
          return item;
        }
        return `<li>${item}<li>`;
      });
    }
  }
}

let forExam = new ForExam();
console.dir(forExam);

// problem1 배열의 문자열을 모두 대문자로 변환
forExam.problem1 = forExam.problem1.map((item) => {
  if (typeof item === 'string') {
    return item.toUpperCase();
  }
});

console.log(forExam.problem1);

// problem2의 배열에서 이름에 '이'가 들어가 포켓몬만 필터링
forExam.problem2 = forExam.problem2.filter((item) => {
  if (typeof item === 'string' && item.includes("이")) {
    return item
  }
})

console.log(forExam.problem2)

// problem3의 배열의 모든 요소를 하나의 문자열로 합치기
forExam.problem3 = forExam.problem3.join('');
console.log(forExam.problem3);