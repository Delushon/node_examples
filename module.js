var getArrayCountString = function(array) {
  var count = array.length
  return `В массиве ${count} элемент${getEndOfWordForCount(count)}`
}

var getEndOfWordForCount = function(count) {
  a = count % 100;
  if (a > 19) {
    a = a % 10;
  }
  if (a == 1) {
    return "";
  }
  else if (a >= 2 && a <= 4) {
    return "а";
  }
  else {
    return "ов";
  }
}

module.exports.getArrayCountString = getArrayCountString;
