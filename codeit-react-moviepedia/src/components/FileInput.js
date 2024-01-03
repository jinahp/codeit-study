/**
 *
 * [정리]
 * useRef는 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해주는 훅이다.
 * ref prop을 사용하면 DOM 노드를 참조할 수 있다.
 * useRef는 컴포넌트의 렌더링과 관련이 없고,
 * 주로 DOM 요소에 대한 참조를 저장하거나 업데이트하는데 활용된다.
 *
 * Ref 객체의 current라는 프로퍼티를 사용하면 DOM 노드를 참조할 수 있다.
 * current 값은 없을 수도 있으니까 반드시 값이 존재하는지 검사하고 사용해야 한다.
 *
 *
 */

import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef(); // 파일 인풋 노드를 참조할 Ref 객체를 생성

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
