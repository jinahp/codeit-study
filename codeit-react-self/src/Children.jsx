// import React from "react";
// import { AppContext } from "./App";

// const Children = () => {
//   return (
//     <AppContext.Consumer>
//       {/* context의 변화를 감시하는 컴포넌트이다. */}
//       {(user) => (
//         <>
//           <h3>AppContext에 존재하는 값의 name은 {user.name}입니다.</h3>
//           <h3>AppContext에 존재하는 값의 age는 {user.age}입니다.</h3>
//         </>
//       )}
//     </AppContext.Consumer>
//   );
// };

// export default Children;

import { useContext } from "react";
import { AppContext } from "./Main";

const Children = () => {
  // useContext를 이용해서 따로 불러온다.
  const user = useContext(AppContext);
  return (
    <>
      <h3>AppContext에 존재하는 값의 name은 {user.name}입니다.</h3>
      <h3>AppContext에 존재하는 값의 age는 {user.age}입니다.</h3>
    </>
  );
};

export default Children;
