const nums = [2, 2, 1, 1, 1, 2, 2, 1, 2, 1, 2, 1, 3, 4, 5, 5, 5, 5, 4, 3, 2, 1, 2, 1, 3, 4, 6, 7, 8, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const num = majorityElement2(nums)

console.log('returned value was ' + num)

export function majorityElement(nums: number[]): number {
    var diccionary: { [key: number]: number } = {}

    for (const i in nums) {
        if (!diccionary[nums[i]]) {
            diccionary[nums[i]] = 1
        } else {
            diccionary[nums[i]]++
        }
    }


    var maxOcurrences = 0
    var maxNumber = '-1'
    for (const key in diccionary) {
        if (diccionary[key] > maxOcurrences) {
            maxNumber = key
            maxOcurrences = diccionary[key]
        }
    }

    console.log('max was ' + maxNumber + ' appeared ' + maxOcurrences + ' times')
    console.log('n/2 = ' + nums.length / 2)
    return parseInt(maxNumber)
};


function majorityElement2(nums: number[]): number {
    let candidate = nums[0], count = 0;

    for (let num of nums) {

        if (count === 0) {
            console.log('change candidate to ' + num)
            candidate = num;
        }

        console.log('num is ' + num)
        console.log('candidate is ' + candidate + ' count is ' + count)

        if (num === candidate) {
            count++
            console.log('++')
        } else {
            count--
            console.log('--')
        }
    }

    return candidate;
};