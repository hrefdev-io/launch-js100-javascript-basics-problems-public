/*
Exercise 8
12.08.22


That's Odd

Write a while loop that logs all odd natural numbers between 1 and 40.
*/

let i = 1;
while (i <= 40) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
}
