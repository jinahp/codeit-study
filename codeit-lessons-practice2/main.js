/**
 * TODO: 기존 직원 정보에 신입 직원들의 정보를 추가하고, 올해의 새 직원 명단을 출력하기.
 *
 * [정리]
 * fetch 요청 시 `headers`를 추가해서 적절한 `Content-Type`을 적어주어야 한다.
 * JSON.stringify(): 자바스크립트 객체를 string 타입의 JSON 데이터로 변환하는 것
 * `catch` 블록을 추가하여 에러가 발생한 경우 콘솔에 에러를 출력
 *
 */

fetch("https://learn.codeit.kr/api/interviews/summer")
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter(
      (interviewee) => interviewee.result === "pass"
    );
    return newMembers;
  })
  .then((newMembers) =>
    fetch("https://learn.codeit.kr/api/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMembers),
    })
  )
  .then((response) => {
    if (response.status === 200) {
      console.log("New members added successfully");
      return response.json();
    } else {
      throw new Error("New members not added");
    }
  })
  .then((members) => {
    console.log(`총 직원 수: ${members.length}`);
    console.log(members);
  })
  .catch((error) => {
    console.error(error);
  });
