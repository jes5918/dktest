function createCheckDigit(membershipId) {
  let answer = 0;
  answer = sumMembershipId(membershipId);
  while (true) {
    answer = sumMembershipId(answer);
    if (parseInt(answer) < 10) {
      return answer;
    }
  }
}

function sumMembershipId(stringMembershipId) {
  return String(stringMembershipId)
    .split("")
    .reduce((a, b) => {
      return parseInt(a) + parseInt(b);
    }, 0);
}

console.log(createCheckDigit("55555"));
