/**
 *
 * 주석처리된 fetch함수 코드와 async가 붙은 fetchAndPrint 함수 코드는 같은 동작을 하는 코드이다.
 * await은 async 함수 안에서만 사용 가능하다.
 * await은 fulfilled 상태가 될 때까지 기다린다.
 * async 함수는 당장 실행되는 것이 아니라 함수 바깥쪽의 코드들이 다 실행되고 나서 그 뒤에 실행될 코드들이 있다는 뜻이다.
 *
 */

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });

async function fetchAndPrint() {
  console.log(2);
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(7);
  const result = await response.text();
  console.log(result);
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);
