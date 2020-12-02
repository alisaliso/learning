function getGaps(array, acc) {
  const indexOfFirstOne = array.indexOf('1');

  if (indexOfFirstOne === -1) return acc.length > 0 ? Math.max(...acc) : 0;

  const newBinaryArray = array.slice(indexOfFirstOne + 1);
  const indexOfSecondOne = newBinaryArray.indexOf('1');

  if (indexOfSecondOne > 0) {
    acc.push(indexOfSecondOne);
  }

  return getGaps(newBinaryArray.slice(indexOfSecondOne), acc);
}

function binaryGap(N) {
  if (typeof N !== 'number' || N <= 1 || N >= 2147483647) return 0;

  const binary = N.toString(2);
  const binaryArray = binary.split('');

  return getGaps(binaryArray, []);
}

module.exports = binaryGap;