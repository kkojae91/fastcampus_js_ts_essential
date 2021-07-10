function doException() {
  throw new Error("와우! 오류야!");
}

function noException() {
  return true;
}

function callException(type) {
  if (type === "do") {
    doException();
  } else {
    if (noException() === false) {
      console.log("오류처리");
    }
  }
}

function main() {
  /*
  예외가 발생하지 않으면 try 구문 실행 후 finally 구문 실행
  예외가 발생하면 catch 구문 실행 후 finally 구문 실행
  catch에는 throw로 던저진 error객체를 인자로 받을 수 있다.
  finally는 에러가 나던 안나던 실행할 코드가 있을 경우 작성! 생략 가능
  */
  try {
    callException("do");
  } catch (e) {
    console.log(e);
  } finally {
    console.log("done");
  }
}

main();
