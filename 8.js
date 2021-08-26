function Test(n) {
  if (n === 6) {
    return 3;
  } else {
    return 3 * Test(n + 1);
  }
}

console.log(`object`, Test(3));
