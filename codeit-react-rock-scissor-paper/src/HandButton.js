/**
 *
 * TODO:  인라인 스타일로 디자인을 적용하기
 *        배경 이미지의 주소는 아래 코드처럼 문자열로 고정된 값이 아니라,
 *        import 로 이미지 파일을 불러온 값을 사용해야 한다.
 *
 * [정리]
 * import로 이미지를 불러오고 사용할 때는 템플릿 리터럴을 사용하여 이미지 경로를 동적으로 설정한다.
 * 스타일을 정의한 객체를 JSX 엘리먼트의 style 속성에 전달하여 해당 엘리먼트에 스타일을 적용할 수 있다.
 *
 */

import HandIcon from "./HandIcon";
import bgImg from "./assets/purple.svg";

// 인라인 스타일을 적용해 주세요
const handButton = {
  width: "166px",
  height: "166px",
  border: "none",
  outline: "none",
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: "transparent",
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
};

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button onClick={handleClick} style={handButton}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
