/**
 *
 * TODO: 현재 보이는 Promise Chaining 코드를 async/await 구문을 사용하는 코드로 바꿔보기
 *
 * await를 사용하여 비동기 작업이 완료될 때까지 코드의 실행을 일시 중지할 수 있다.
 * 중간 변수 response를 let으로 선언하여 여러 번 재할당했다. 그러면 동일한 변수를 재사용할 수 있다.
 *
 */

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     const lastUser = users[users.length - 1];
//     return lastUser.id;
//   })
//   .then((id) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`))
//   .then((response) => response.json())
//   .then((posts) => {
//     const lastPost = posts[posts.length - 1];
//     console.log(lastPost);
//   });

async function getTheLastPostOfTheLastUser() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const lastUser = users[users.length - 1];
  const { id } = lastUser;
  response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const posts = await response.json();
  return posts[posts.length - 1];
}

getTheLastPostOfTheLastUser().then((lastPost) => {
  console.log(lastPost);
});
