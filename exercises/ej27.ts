
const nums = [0, 1, 2, 2, 3, 0, 4, 2]
const val = 2

removeElement(nums, val)

export function removeElement(nums: number[], val: number): number {
    var i = nums.length - 1
    while (i >= 0) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            continue
        }
        i--
    }
    console.log(nums)
    return nums.length
};