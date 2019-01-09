function fib(N) {
  let fibArray = [0, 1];

  for (let i = 1; i < N; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i]);
  }

  return fibArray[N];
}
