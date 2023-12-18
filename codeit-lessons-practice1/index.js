/**
 * TODO: data 배열에 있는 각 항목을 forEach 메소드를 사용하여 반복하면서 할 일 목록 생성하기
 *
 * [정리]
 * document.createElement()를 사용하여 새로운 리스트 아이템 요소 생성
 * listItem.textContent를 사용하여 리스트 아이템의 텍스트 내용 설정
 * list.appendChild(listItem)를 사용하여 생성된 listItem을 문서의 <ul> 요소에 추가
 * appendChild: JavaScript에서 DOM(Document Object Model)에 새로운 자식 노드를 추가하는 메소드
 *              특정 부모 노드 아래에 자식 노드를 추가할 때 사용함
 */

const list = document.querySelector(".list");
const data = [
  {
    title: "자바스크립트 공부하기",
    isClear: true,
  },
  {
    title: "집 청소하기",
    isClear: true,
  },
  {
    title: "아침에 도시락 싸주기",
    isClear: true,
  },
  {
    title: "독서하기",
    isClear: false,
  },
  {
    title: "운동하기",
    isClear: false,
  },
];

data.forEach((item, i) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");

  if (item.isClear) {
    listItem.classList.add("item", "done");
  } else {
    listItem.classList.add("item");
  }

  listItem.textContent = `${i + 1}. ${item.title}`;
  list.appendChild(listItem);
});
