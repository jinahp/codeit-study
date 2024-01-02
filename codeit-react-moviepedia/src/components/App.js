/**
 *
 * [정리]
 * App 컴포넌트를 렌더링할 때는 리액트는 App 컴포넌트 함수를 실행한다.
 * useEffect 함수에 실행할 콜백 함수와 빈 배열을 넘겨주면 리액트는 콜백 함수를 맨 처음 렌더링 할 때만 실행한다.
 * 따라서, 무한 루프에 빠지지 않는다.
 *
 * useEffect 내의 콜백 함수는 리액트가 비동기로 실행하는 함수이다.
 * 배열은 dependency list라고 부르며, 이 배열에 있는 값이 바뀔 때마다 콜백 함수를 실행한다.
 * 배열에 아무 값도 넣지 않으면 리액트는 콜백 함수를 맨 처음 렌더링 할 때만 실행한다.
 *
 * useEffect 함수는 맨 처음 렌더링이 끝나면 콜백 함수를 실행하고,
 * 그 다음부터는 dependency list를 비교하여 기억한 값이 다른 경우에만 콜백을 실행한다.
 *
 * 비동기로 state를 변경할 때는 잘못된 시점의 값을 사용하는 문제가 있다.
 * 그럴 땐, setter 함수의 값이 아니라 콜백을 전달해서 해결할 수 있다.
 * setter함수((이전 state값) => [...변경할 state값, ...reviews]);
 *
 */
import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import { getReviews } from "../api";

const LIMIT = 6;

function App() {
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");

  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getReviews(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }

    const { paging, reviews } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + options.limit);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = async () => {
    await handleLoad({ order, offset, limit: LIMIT });
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewForm />
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
