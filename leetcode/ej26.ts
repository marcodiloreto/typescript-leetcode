
export function removeDuplicates(nums: number[]): number {
    var i = 1
    var prev = nums[0]
    while (i < nums.length) {
        if (nums[i] === prev) {
            nums.splice(i, 1)
            continue
        }
        var prev = nums[i]
        i++
    }
    console.log(nums)
    return nums.length
};

function removeDuplicates1(nums: number[]): number {
    const set = new Set(nums)
    return set.size
};