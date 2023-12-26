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

// problem12의 배열의 시작 부분에 '피카츄'를 추가하고 결과를 출력
forExam.problem12.unshift("피카츄");
console.log(forExam.problem12);

// problem13의 배열에서 '라이츄'를 '이브이'로 변경
const index = forExam.problem13.indexOf("라이츄");
if (index !== -1){
  forExam.problem13.splice(index, 1, "이브이");
}

console.log(forExam.problem13);

// problem14의 배열을 복제하고, 복제된 배열에 '이브이' 추가, 원본배열과 복제된 배열 출력
const clonedArray = forExam.problem14.slice();

clonedArray.push('이브이');

console.log(forExam.problem14);
console.log(clonedArray);

// problem15의 배열에서 마지막 두 요소만 가져오기
const lastTwoElements = forExam.problem15.slice(-2);
console.log(lastTwoElements);

// problem16의 두 배열을 하나의 배열로 합치기
const flat = forExam.problem16.flat();
console.log(flat);

// problem17의 배열에서 '라이츄'를 찾아 그 인덱스를 출력
const ind = forExam.problem17.indexOf("라이츄");
console.log(ind);

// problem18의 배열을 거꾸로 순서를 뒤집어 출력
console.log(forExam.problem18.reverse());

// problem19의 배열에서 각 포켓몬의 이름 길이를 배열로 만들기
const nameLengthsArray = forExam.problem19.map((item) => {
  return typeof item === 'string' ? item.length : null;
});

console.log(nameLengthsArray);

// problem20의 배열에서 이름 길이가 3 글자 이상인 포켓몬들만 필터링
const threeLength = forExam.problem20.filter((item) => {
  if (item.length >= 3) {
    return item
  }
})

console.log(threeLength);

// problem21의 배열의 각 요소를 리스트 아이템 (<li>)으로 변환
forExam.problem21 = forExam.problem21.map((item) => {
  return "<li>" + item + "</li>"
})

console.log(forExam.problem21);

// problem22의 배열을 하나의 리스트 (<ul>) 문자열로 합치기
const ulString = `<ul>${forExam.problem22.map(item => item).join('')}</ul>`;

console.log(ulString);

// problem23의 배열에서 '지우'가 포함된 태그만 필터링
const jiwoo = forExam.problem23.filter((item) => {
  if(item.includes("지우")){
    return item
  }
})
console.log(jiwoo);