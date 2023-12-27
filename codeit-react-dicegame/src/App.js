// jsx 문법 내에 자바스크립트 숫자를 넣고 싶다면 중괄호를 적어주어야 한다.

import Dice from "./Dice";

function App() {
  return (
    <div>
      <Dice color="red" num={2} />
    </div>
  );
}

export default App;
