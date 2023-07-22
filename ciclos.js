// ciclos - loops
// 1. for
// 2. while
// 3. do while

// For
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// While
let j = 0;
while (j < 100) {
  console.log(j);
  j++;
}

// // Do while
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 100);
