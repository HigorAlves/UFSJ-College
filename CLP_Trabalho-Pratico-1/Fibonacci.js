//Implementação recursiva do Fibonacci em Javascript

function FibonacciImperativo(n) {
  var a = 0, b = 1, sum = 0;
  while (n > 1) {
    sum = a + b;
    a = b;
    b = sum;
    n = n - 1;
  }
  return sum;
}

function FibonacciFuncional(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  else {
    return FibonacciFuncional(n - 1) + FibonacciFuncional(n - 2);
  }
}

console.log("Imperativo: " + FibonacciImperativo(20))
console.log("Recursivo: " + FibonacciFuncional(20))