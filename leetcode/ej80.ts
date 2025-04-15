
const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]

console.log('asd ' + removeDuplicates(nums))

export function removeDuplicates(nums: number[]): number {
    var i = 0;
    var diccionary: { [key: number]: number } = {}
    while (i < nums.length) {
        if (!diccionary[nums[i]]) {
            diccionary[nums[i]] = 1
        } else if (diccionary[nums[i]] === 2) {
            nums.splice(i, 1)
            continue
        } else {
            diccionary[nums[i]]++
        }
        i++

    }

    console.log(nums)
    return nums.length
};


// real sexy one
function removeDuplicates2(nums: number[]): number {
    if (nums.length <= 2) {
        return nums.length;
    }

    let k = 2;

    for (let i = 2; i < nums.length; i++) {

        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};