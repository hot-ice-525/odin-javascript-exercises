const palindromes = function (string) {
  let strArray = string.toLowerCase().split("");

  let removeFromArray = [" ", ",", "'", "!", "."];
  let str = strArray.filter((char) => !removeFromArray.includes(char)).join();

  let reversedStr = str.split("").reverse().join("");

  return (str === reversedStr);
};

// Do not edit below this line
module.exports = palindromes;
