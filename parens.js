function checkCurlyBracesAndSquareBracketsAndParenthesisForValidOrdering(str) {
  var stack = [];
  str.split('').forEach(function(char) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (char === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (char === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  });

  if (stack.length > 0) {
    console.log('Not Valid');
  } else {
    console.log('Valid');
  }
}

checkCurlyBracesAndSquareBracketsAndParenthesisForValidOrdering('(()[{[]}]');
