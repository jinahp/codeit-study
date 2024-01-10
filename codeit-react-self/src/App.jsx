import { useState, useRef } from "react"; // useState와 useRef사용

export function Use() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);

  console.log("Rendering!😯"); // 화면이 렌더링 될 때마다 콘솔에 찍힘

  // 클릭 시 값 증가
  const upCountState = () => {
    setCountState(countState + 1);
  };

  const upCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("useRef: ", countRef.current);
  };

  // 화면에 보여지는 것
  return (
    <div className="Use">
      <div className="nav">
        <h1>useState() VS useRef()</h1>
      </div>
      <div className="list">
        <h2>
          useState()
          {/* upCountState함수 실행 */}
          <span onClick={upCountState}>✅</span>
          {countState}
        </h2>
      </div>
      <div className="list">
        <h2>
          useRef()
          {/* upCountRef함수 실행 */}
          <span onClick={upCountRef}>✅</span>
          {countRef.current}
        </h2>
      </div>
    </div>
  );
}

export default Use;
