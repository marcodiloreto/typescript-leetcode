
const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3

rotate(nums, k)

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {

    if (k > nums.length) {
        k = k % nums.length
    }

    const rotated = nums.splice(0, nums.length - k)
    console.log(rotated)
    nums.push(...rotated)
    console.log(nums)

};