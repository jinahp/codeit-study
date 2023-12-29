/**
 *
 * TODO: HandButton.css 파일을 불러오기
 * button에 'HandButton' 클래스를 적용하기.
 * HandIcon 에 'HandButton-icon' 클래스를 적용하기.
 *
 */

import HandIcon from "./HandIcon";
import "./HandButton.css";

// CSS 파일로 스타일을 적용해 주세요
function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button className="HandButton" onClick={handleClick}>
      <HandIcon value={value} className="HandButton-icon" />
    </button>
  );
}

export default HandButton;
