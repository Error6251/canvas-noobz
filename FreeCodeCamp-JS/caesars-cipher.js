function rot13(str) {
  let start = 65,
    end = 90,
    temp = 0;
  let len = str.length;
  let out = "";

  for (let i = 0; i < len; i++) {
    temp = str[i].charCodeAt();
    if (temp >= start && temp <= end) {
      temp -= 13;

      if (temp < start) {
        temp = end - (start - temp) + 1;
      }
      out += String.fromCharCode(temp);
    } else {
      out += str[i];
    }
  }

  return out;
}

rot13("SERR PBQR PNZC");
