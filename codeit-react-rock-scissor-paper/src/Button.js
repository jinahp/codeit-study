/**
 *
 * JSX 문법으로 컴포넌트를 작성할 때 컴포넌트를 단일 태그가 아니라 여는 태그와 닫는 태그의 형태로 작성하면
 * 그 안에 작성된 코드가 바로 이 children 값에 담긴다.
 * 화면에 보여질 모습을 조금 더 직관적인 코드로 작성하고자 할 때 children 값을 활용할 수 있다.
 *
 */

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
