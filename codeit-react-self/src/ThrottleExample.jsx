import { useRef, useState } from "react";

const ThrottleExample = () => {
  const [clickCount, setClickCount] = useState(0);
  const inThrottle = useRef(false); // let inThrottle;로 선언했을 때는 클릭 시마다 재렌더링이 발생해서 쓰로틀링이 제대로 되지 않음. 따라서 useRef로 선언해줘야 함.

  // 쓰로틀링 함수 정의
  const throttle = (func, limit) => {
    // limit - 함수가 호출되는 최소 간격 시간
    return function (...args) {
      if (!inThrottle.current) {
        func(...args);
        inThrottle.current = true;
        setTimeout(() => (inThrottle.current = false), limit);
      }
    };
  };

  // 실제 클릭 핸들러를 쓰로틀링 함수로 감싸서 생성
  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    // 여기에서 실제 클릭 이벤트 처리 로직을 수행
    console.log("Button clicked!🌼");
  };

  // 쓰로틀된 클릭 핸들러 생성 (3W초에 한 번만 호출 가능)
  const throttledClick = throttle(handleClick, 3000);

  return (
    <div>
      <p>Click Count: {clickCount}</p>
      <button onClick={throttledClick}>Click me</button>
    </div>
  );
};

export default ThrottleExample;
