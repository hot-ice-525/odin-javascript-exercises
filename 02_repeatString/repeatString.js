const repeatString = function(string, repeatTimes) {
  let repeatedString = "";

  if (repeatTimes < 0) {
    return "ERROR";
  }

  for (let i = 0; i < repeatTimes; i++) {
    repeatedString += string;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
