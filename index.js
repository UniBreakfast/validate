import 'c4console'
import validate from './validate.js'


const inputValues1 = {
  login: ' ',
  password: ' ',
  email: ''
}

const requirements1 = [
  {
    field: 'password', is: /.{4}/,
    issue: 'has to be at least 4 characters long'
  },
  {
    field: 'password', not: /\s/,
    issue: 'should not include spaces'
  },

  {
    field: 'login', hasNo: /[^\w]/,
    issue: 'only alpanumeric characters allowed'
  }
]


validate(inputValues1, requirements1).c()


setTimeout(() => { }, 7e7)