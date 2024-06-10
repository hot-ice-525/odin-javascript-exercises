const reverseString = function(str) {
  let strArray = Array.from(str);
  let newStrArray = [];

  for (let i = (strArray.length - 1); i >= 0; i--) {
    newStrArray.push(strArray[i]);
  }

  let reverseStr = newStrArray.join("");
  return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
