function productExceptSelf(nums: number[]): number[] {
    return nums.map((value, index, arr) => {
        return arr.reduce((prev, curr, ind) => {
            if (index !== ind) {
                return prev * curr
            } else {
                return prev
            }
        }, 1)
    })
};

const kk = [-1, 1, 0, -3, 3]

console.log(productExceptSelf2(kk))

function productExceptSelf2(nums: number[]): number[] {
    const n = nums.length;
    const answer: number[] = new Array(n).fill(1);

    // Calculate the product of all elements to the left of each element
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;
        console.log('answer[' + i + '] is = ' + leftProduct)
        leftProduct *= nums[i];
    }

    // Calculate the product of all elements to the right of each element
    // and multiply it with the current value in the answer array
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        console.log(answer[i] + ' x ' + rightProduct + ' = ' + answer[i] * rightProduct)
        answer[i] *= rightProduct;
        console.log('answer[' + i + '] is = ' + answer[i])
        rightProduct *= nums[i];
    }

    return answer;
};

