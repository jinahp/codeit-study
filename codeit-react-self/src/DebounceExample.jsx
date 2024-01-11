import { useRef, useState } from "react";

const DebounceExample = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const timeoutId = useRef(null);

  // 디바운스 함수 정의
  const debounce = (func, delay) => {
    return function (...args) {
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // 실제 검색 핸들러를 디바운스 함수로 감싸서 생성
  const handleSearch = debounce((value) => {
    // 여기에서 실제 검색 로직을 수행
    console.log("Searching for:", value);
  }, 300); // 300ms 디바운스 딜레이

  // 텍스트 입력 변경 시 호출되는 핸들러
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    handleSearch(value); // 디바운스된 핸들러 호출
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default DebounceExample;
