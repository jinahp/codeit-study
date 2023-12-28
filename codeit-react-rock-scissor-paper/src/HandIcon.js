/**
 * TODO: img 태그를 사용해서 ./assets/rock.svg 파일을 보여주세요.
 *         App 컴포넌트의 div 태그 안에 HandIcon 컴포넌트를 배치해 주세요.
 *
 * 컴포넌트의 첫글자는 대문자로 작성한다.
 */

import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const HAND_IMG = { rock: rockImg, scissor: scissorImg, paper: paperImg };
function HandIcon({ value }) {
  return <img src={HAND_IMG[value]} alt={value} />;
}

export default HandIcon;
