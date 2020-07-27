// Given a string S containing only digits, write a function that returns a list containing all possible combinations of valid IPv4 IP addresses.

// Example:

// $ getIp(‘11211’)
// 1.1.2.11
// 1.1.21.1
// 1.12.1.1
// 11.2.1.1

const isValid = (ip) => {
  const a = ip.split(".");
  const t = a.filter((num) => num > 255);

  if (t.length > 0) {
    return false;
  }
  return true;
};

const convert = (str, length) => {
  let newStr = str;
  const list = [];

  for (let i = 1; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        newStr = str.substring(0, k) + "." + str.substring(k);
        newStr = newStr.substring(0, j) + "." + newStr.substring(j);
        newStr = newStr.substring(0, i) + "." + newStr.substring(i);

        if (isValid(newStr)) {
          list.push(newStr);
        }
      }
    }
  }

  return list;
};

const getIp = (str) => {
  const arrayLength = str.length;
  if (arrayLength < 4 || arrayLength > 12) return "Invalid string";
  return convert(str, arrayLength);
};

console.log(getIp("11211"));
