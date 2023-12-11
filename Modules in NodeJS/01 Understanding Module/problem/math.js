// math.js - a CommonJS module for performing calculations on a set of numbers

module.exports.sum = function sum(nums) {
    return nums.reduce((total, nums) => total + nums, 0);
}

module.exports.mean = function mean(nums) {
    return module.exports.sum(nums) / nums.length;
}