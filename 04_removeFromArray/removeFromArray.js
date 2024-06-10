const removeFromArray = function(array, ...elements) {
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (elements[i] === array[j]) {
        array.splice(j, 1);
        j -= 1;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
