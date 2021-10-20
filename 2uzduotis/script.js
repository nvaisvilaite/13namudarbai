// sum of numbers
var sum = 0;
// avarage of numbers
var avg = 0;
// largest number
var larg = 0;
// Smallest number
var small = 0;
// Array of numbers
var number = [
  100,
  21,
  10.211,
  300,
  41,
  21,
  -41,
  0,
  1,
  27
];
// Function to print
function show_results(sum, avg, small, larg) {
  // Print
  console.log("Skaičių suma: " + sum);
  console.log("Vidurkis: "+ avg);
  console.log("Mažiausias skaičius: " + small);
  console.log("Didžiausias skaičius: " + larg);
}

for(var i=0; i < number.length; i++) {
  sum += number[i];
    // searching for largest
  if(larg < number[i]){
    larg=number[i];
  }
  // searching for smallest
  if(number[i] < small){
    small=number[i];
  }
}

avg = sum / number.length;
// 3 - decimals
avg = avg.toFixed(3);

// Print
show_results(sum, avg, small, larg);
