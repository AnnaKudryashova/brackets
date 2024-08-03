module.exports = function check(str, bracketsConfig) {
  const leftParts = bracketsConfig.map(config => config[0]);
  const rightParts = bracketsConfig.map(config => config[1]);
  const stack = [];

  for (let char of str) {
      const leftIndex = leftParts.indexOf(char);
      const rightIndex = rightParts.indexOf(char);

      if (leftIndex === rightIndex) {
          if (stack.includes(char)) {
              stack.pop();
          } else {
              stack.push(char);
          }
      } else if (leftIndex !== -1) {
          stack.push(char);
      } else if (rightIndex !== -1 && stack.length > 0 && leftParts[rightIndex] === stack[stack.length - 1]) {
          stack.pop();
      } else {
          return false;
      }
  }

  return stack.length === 0;
}
