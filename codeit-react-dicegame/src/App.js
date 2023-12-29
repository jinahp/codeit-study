/**
 *
 * jsx 문법 내에 자바스크립트 숫자를 넣고 싶다면 중괄호를 적어주어야 한다.
 * useState는 파라미터로 초기값을 전달 받고 함수가 실행된다.
 * useState는 state와 setter 함수를 배열 형태로 리턴한다.
 * state를 변경할 때는 setter 함수를 통해 변경해야 한다.
 * state 값이 바뀌어야 새롭게 화면을 렌더한다.
 * 배열이나 객체 같은 참조형 타입의 state를 변경할 때는 `...` spread 문법을 사용한다.
 *
 *  */

import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import "./App.css";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <Button className="App-button" color="blue" onClick={handleRollClick}>
        던지기
      </Button>
      <Button className="App-button" color="red" onClick={handleClearClick}>
        처음부터
      </Button>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
