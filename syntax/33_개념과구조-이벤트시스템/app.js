function main() {
  const BUBBLING_PHASE = false;
  const CAPTURING_PHASW = true;
  const PHASE_NAME = ["NONE", "CAPTURING", "TARGET", "BUBBLING"];

  function eventLogger({ target, currentTarget, eventPhase }) {
    // 실제 클릭된 요소는 target에 저장되고, 이벤트 버블링으로 잡히는 요소는 currentTarget에 저장된다. 전파된 이벤트인지 원래 이벤트인지 확인하는 것은 eventPhase에 저장된다.
    console.log(`${target.dataset.name}, ${currentTarget.dataset.name}, ${PHASE_NAME[eventPhase]}`);
  }

  let divs = document.querySelectorAll("div");
  // 세번째 인자를 false일 경우 버블링으로 진행, true로 놓았을 경우 캡쳐링으로 진행
  divs.forEach((div) => div.addEventListener("click", eventLogger, BUBBLING_PHASE));
}

document.addEventListener("DOMContentLoaded", main);
