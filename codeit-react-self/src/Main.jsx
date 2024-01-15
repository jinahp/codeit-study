import { createContext } from "react";
import Children from "./Children";

// AppContext 객체를 생성한다.
export const AppContext = createContext();

const Main = () => {
  const user = {
    name: "봄이",
    age: "2",
  };

  return (
    <>
      <AppContext.Provider value={user}>
        {/* Provider - 생성한 context를 하위 컴포넌트에게 전달하는 역할을 한다 */}
        <div>
          <Children />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default Main;
