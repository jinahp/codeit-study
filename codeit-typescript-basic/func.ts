type Point = [number, number]; // 튜플 타입을 정의하는 방법

function getDiff(fromPoint: Point, toPoint: Point) {
  let dx = toPoint[0] - fromPoint[0];
  let dy = toPoint[1] - fromPoint[1];
  return [dx, dy];
}

const monster: {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
  move: (fromPoint: Point, toPoint: Point) => void; // 함수를 값으로 사용할 때 타입을 지정하는 방법, 리턴 값이 없는 경우는 void로 지정
} = {
  name: "고블린",
  level: 22,
  skills: ["태권도", "특공무술"],
  move(fromPoint, toPoint) {
    let [dx, dy] = getDiff(fromPoint, toPoint);
    console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
  },
};

const current: [number, number] = [0, 0];
const target: [number, number] = [4, 5];
monster.move(current, target);
