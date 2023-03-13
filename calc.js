const test = require('./module/add.js');
//require 요청하다. 뭘? 나 모듈좀 가져와줘
const work = test.add("글자를"," 합쳐라!")
console.log(work)
