const numberChecker = require('./number-checker')

module.exports = function add (first, second) {
  if(numberChecker(first) === true){
    return first + second;
  }
  }

  //여기서 function은 메서드가 된다.

//숫자열만 만들어낼려고 했는데 문자열까지도 가능하다.
//우리가 의도하지 않은 행위를 문제없이 실행할때 버그라고 한다.