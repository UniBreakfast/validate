import 'c4console'
import validate from './validate.js'


const inputValues1 = {
  login: 'Bob',
  password: 'qwerty',
  email: ''
}

const requirements2 = {
  login: {hasNo: /[^\w]/, issue: 'only alphanumeric characters allowed'},
  password: [
    {is: /.{4}/, issue: 'has to be at least 4 characters long'},
    {not: /\s/, issue: 'should not include spaces'},
  ],
  email: [],
}


validate(inputValues1, requirements2).c()


setTimeout(() => { }, 7e7)