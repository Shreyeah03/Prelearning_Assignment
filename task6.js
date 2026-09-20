/*Task 6: Write a program to find the factorial of a number using a recursive function*/

function factorial(nums) {
    if (nums === 0 || nums === 1) {
        return 1;
    } else {
        return nums * factorial(nums - 1);
    } 
  }
  console.log("Factorial of 13 is: " + factorial(13)); 