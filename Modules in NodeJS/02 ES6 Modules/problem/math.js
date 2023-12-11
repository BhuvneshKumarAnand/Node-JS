// math.js - a CommonJS module for performing calculations on a set of numbers

export function sum(num) {
    return num.reduce((total, num) => total + num, 0);
}

export function mean(num) {
    return sum(num) / num.length;
}

// module.exports = {
//   sum: sum,
//   mean: mean,
// };