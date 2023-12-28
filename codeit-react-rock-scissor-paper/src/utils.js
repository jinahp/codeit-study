const HANDS = ["rock", "scissor", "paper"];

const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

export function compareHand(a, b) {
  // a가 b를 이기면 1을 반환
  if (WINS[a] === b) return 1;
  // b가 a를 이기면 -1을 반환
  if (WINS[b] === a) return -1;
  // 무승부
  return 0;
}

function random(n) {
  return Math.floor(Math.random() * n);
}

export function generateRandomHand() {
  const idx = random(HANDS.length);
  return HANDS[idx];
}
