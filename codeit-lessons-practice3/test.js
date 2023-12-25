/**
 *
 * new Promise와 Promise의 차이
 * then 방식에서는 reject를 catch로 처리하고, async await 방식에서는 try/catch로 처리한다.
 * 따라서 지금 적힌 코드에서는 try/catch가 없기 때문에 p4 변수의 주석을 풀면 오류가 발생한다.
 *
 */

const p1 = fetch("https://jsonplaceholder.typicode.com/users?id=1").then(
  (response) => response.text()
);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 2000);
});
const p3 = Promise.resolve("Success");
// const p4 = Promise.reject(new Error("Fail"));

async function test() {
  console.log(await p1);
  console.log(await p2);
  console.log(await p3);
  // console.log(await p4);
}

console.log("----Start----");
test();
console.log("-----End----");
