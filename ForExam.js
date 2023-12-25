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

// problem4의 배열을 사용하여 각 포켓몬의 이름을 키로, 이름의 길이를 값으로 하는 객체를 생성
const obj = {};

for (const item of forExam.problem4) {
  if (typeof item === 'string') {
    obj[item] = item.length;
  }
}

console.log(obj);

// problem5의 배열을 알파벳 순서로 정렬
forExam.problem5.sort();

console.log(forExam.problem5);

// problem6의 배열에서 첫 번째로 '이'가 포함된 포켓몬 찾기
const six = forExam.problem6.find((pokemon) => {
  return typeof pokemon === 'string' && pokemon.includes('이');
});

console.log(six);

// problem7의 배열의 모든 포켓몬 이름이 '이'를 포함하고 있는지 확인
const seven = forExam.problem7.every((item) => {
  return typeof item === 'string' && item.includes("이")
})

console.log(seven);


// problem8의 배열 중에서 최소 하나의 포켓몬 이름이 '꼬'로 시작하는지 확인
const eight = forExam.problem8.some((item) => {
  return typeof item === 'string' && item.startsWith("꼬")
})

console.log(eight);

// problem9의 배열에 '이브이'를 추가하고, 결과를 출력
forExam.problem9.push("이브이");
console.log(forExam.problem9);

// problem10의 배열에서 마지막 요소를 제거하고, 결과를 출력
forExam.problem10.pop();
console.log(forExam.problem10);

// problem11의 배열의 첫 번째 요소를 제거하고, 결과를 출력
forExam.problem11.shift();
console.log(forExam.problem11);