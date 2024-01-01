/**
 *
 * [정리]
 * App 컴포넌트를 렌더링할 때는 리액트는 App 컴포넌트 함수를 실행한다.
 * useEffect 함수에 실행할 콜백 함수와 빈 배열을 넘겨주면 리액트는 콜백 함수를 맨 처음 렌더링 할 때만 실행한다.
 * 따라서, 무한 루프에 빠지지 않는다.
 *
 */

import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import { getReviews } from "../api";

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");

  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
