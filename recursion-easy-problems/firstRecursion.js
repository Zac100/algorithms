function countDown(num) {
  if (num <= 0) {
    console.log('all done');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

countDown(10);

function sumRange(num) {
  if (num === 1) return 1;

  return num + sumRange(num - 1);
}

sumRange(5);

function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}
factorial(5);
