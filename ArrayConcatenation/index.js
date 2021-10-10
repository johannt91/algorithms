let nums = [ 1, 2, 3, 4, 5];

// Using for loop
getConcatenation = () => {
    let result = [];
    for (let i = 0; i<=nums.length-1; i++) {
        result[i] = nums[i];
        result[i + nums.length] = nums[i];
    }
    console.log(result);
    return result;
};


// Using concat method
getConcatenation = () => {
    let ans = nums.concat(nums)
    console.log(ans);
    return ans;
};


// Using spread
getConcatenation = () => {
    console.log([...nums, ...nums]);
    return [...nums, ...nums]
};

getConcatenation(nums);