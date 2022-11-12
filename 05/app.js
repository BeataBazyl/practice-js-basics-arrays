const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});


const sum = evenNumbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
})

console.log(evenNumbers);
console.log(sum);