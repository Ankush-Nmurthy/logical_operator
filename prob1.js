//Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let yob = 2006;
let ref_age = 2022;
let diff = ref_age - yob;
 diff >= 13 && diff <= 19 ? console.log("Teenage") :
   diff >= 20 && diff <= 29 ? console.log("Twentiees"): 
 console.log("NA");




