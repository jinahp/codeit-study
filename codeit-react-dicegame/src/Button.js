/**
 *
 * 템플릿 문자열 내에 클래스 명을 추가할 때 빈 공백이 필요하다.
 * 템플릿 문자열 내에 공백이 없다면 하나의 클래스가 되어버린다.
 * prop 값이 불필요할 수 있을 때는 className = "" 빈문자열을 추가해준다.
 *
 */

import "./Button.css";

function Button({ className = "", color = "blue", children, onClick }) {
  const classNames = `Button ${color} ${className}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
