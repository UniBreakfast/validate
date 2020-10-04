const check = (str, bracketsConfig) => {
  const openBrackets = bracketsConfig.map(pair => pair[0])
  console.log(openBrackets);
  let open = [];
  let close = [];
    // console.log(bracketsConfig[0][1]);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') open.push(str[i])
  }
}
// module.exports = check
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
console.log(check('((()))()', config1)); //true
console.log(check('|()|(||)||', config5));
console.log(check('[]()', config2)); //true