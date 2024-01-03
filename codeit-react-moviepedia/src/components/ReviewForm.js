/**
 *
 * [정리]
 * onChange 이벤트는 사용자 입력이 끝났을 때 발생한다.
 * 리액트에서 onChange는 순수 자바스크립트에서 사용하는 onChange와는 다르다.
 * 리액트에서 onChange는 input의 value가 변경될 때마다 발생한다.
 * input의 value가 변경될 때마다 그 값을 state에 반영한다.
 *
 * onSubmit 이벤트는 form에서 submit 버튼을 눌렀을 때 발생한다.
 * 기본 동작 방해하기 - e.preventDefault();
 *
 * 입력 폼에서 여러 개로 관리하던 state를 하나의 state로 관리하는 방법은 input 태그의 name 속성을 활용하는 것이다.
 *
 *
 */

import { useState } from "react";
import FileInput from "./FileInput";
import "./ReviewForm.css";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value, // name의 값으로 프로퍼티명 지정하고 value를 할당한다.
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // e.target에서 name과 value를 가져온다.
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <input
        type="number"
        name="rating"
        value={values.rating}
        onChange={handleInputChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
