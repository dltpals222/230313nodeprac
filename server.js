
//http는 내장모듈이다. (프로토콜)
const http = require('http');

//createserver는 함수를 사용하는게 규칙이다. 또한 function안에는 요청(request)과 응답(response)를 적어줘야된다.
//서버를 만들어준다.
const server = http.createServer(function(request, response){
  response.statusCode = 200;
  response.setHeader('Content-Type','text/html');
  
  // const mainPage = require('./module/html.js')
  // console.log(mainPage)

  response.write('test')

  response.end();
})

//서버가 돌아가는지 확인해준다. (듣는방식)
server.listen(2080, function(error) {
  if(error){
    console.error('서버 안돌아감');
  } else {
    console.log('서버 돌아감');
  }
})

//서버만드는데 알고리즘은 필요없다.
//외부와는 통신이 안된다.