/**
 *
 * TODO: state 추가하기, state 값 변경하기
 *
 */

import { useState } from "react";
import Button from "./Button";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import { compareHand, generateRandomHand } from "./utils";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]); // 이전 게임의 승부 결과를 기록하는 배열.

  // 가위바위보 버튼을 클릭할 때 호출되는 함수
  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand(); // 상대 플레이어(컴퓨터 등)의 무작위 손 모양.
    const nextHistoryItem = getResult(nextHand, nextOtherHand); // 현재 게임의 결과 (승, 패, 무승부)
    setHand(nextHand); // 클릭한 가위바위보 버튼의 값
    setOtherHand(nextOtherHand);
    // gameHistory에 nextHistoryItem 을 추가해 주세요
    setGameHistory([...gameHistory, nextHistoryItem]);
  };

  // reset 함수
  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    // gameHistory를 비워주세요
    setGameHistory([]);
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <p>승부 기록: {gameHistory.join(", ")}</p>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
