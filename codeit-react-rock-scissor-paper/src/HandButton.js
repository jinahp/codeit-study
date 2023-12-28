/**
 *
 * TODO: HandButton 컴포넌트의 button 태그 안에 HandIcon 컴포넌트를 배치하기.
 *        HandButton 의 value prop을 HandIcon 의 prop으로 넘겨주기.
 *        button 을 클릭했을 때 handleClick 함수가 실행되도록 이벤트 핸들러를 추가하기.
 *
 */

import HandIcon from "./HandIcon";

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
