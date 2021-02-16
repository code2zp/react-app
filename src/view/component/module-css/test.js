const test = function (param) {
  console.log(param)
  console.log('this is a func')
}

test`
color: palevioletred;
font-size: 1.5em;
text-align: center;
`
