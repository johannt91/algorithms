let nums = [ 1, 2, 3, 4, 5];

// Using for loop
const firstConcatMethod = () => {
    let result = [];
    for (let i = 0; i<=nums.length-1; i++) {
        result[i] = nums[i];
        result[i + nums.length] = nums[i];
    }
    return result;
};


// Using concat method
const secondConcatMethod = () => {
    let ans = nums.concat(nums)
    return ans;
};


// Using spread
const thirdConcatMethod = () => {
    return [...nums, ...nums]
};

console.log(firstConcatMethod(nums));
console.log(SecondConcatMethod(nums));
console.log(ThirdConcatMethod(nums));
