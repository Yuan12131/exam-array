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
