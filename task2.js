/*Task 2: Need to create a JavaScript function for the sum of a string (Example like "1.5, 
2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9") */
function sumOfNumbersInString(str) {
    let sum = 0;
    let numbers = str.split(',').map(num => parseFloat(num.trim()));    
    for (let i = 0; i < numbers.length; i++) {
        if (!isNaN(numbers[i])) {
            sum += numbers[i];
        } 
    }
    return sum;
} 

console.log(sumOfNumbersInString("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
