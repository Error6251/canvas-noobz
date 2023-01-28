function palindrome(str) {
  let answer = true;
  str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let start = 0,
    end = str.length - 1;

  while (start < end) {
    if (str[start] != str[end]) {
      answer = false;
      break;
    }

    start++;
    end--;
  }
  // console.log(answer)
  return answer;
}

palindrome("A man, a plan, a canal. Panama");
