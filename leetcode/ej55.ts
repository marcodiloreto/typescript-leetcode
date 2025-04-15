
const nums = [0, 3, 1, 1, 4]

console.log(canJump(nums))

export function canJump(nums: number[]): boolean {

    var finished = false
    var accumulator = nums[0]
    var i = 1

    while (i < nums.length && accumulator > 0) {
        accumulator--
        accumulator = Math.max(nums[i], accumulator)
        if (i + 1 === nums.length) finished = true
        i++
    }

    return finished
};