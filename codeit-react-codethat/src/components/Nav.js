/**
 *
 * [정리]
 *
 * Router에서는 a 태그 대신 Link 컴포넌트를 사용한다.
 * to prop을 사용하여 이동할 경로를 문자열로 넣어준다.
 * to prop 값이 '/'이면 절대경로를 의미하고, 그 외의 값이면 상대경로를 의미한다.
 *
 */

import { Link } from "react-router-dom";
import Container from "./Container";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.svg";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="Codethat Logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link to="/courses">카탈로그</Link>
          </li>
          <li>커뮤니티</li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
