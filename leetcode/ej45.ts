const nums = [2, 3, 1, 1, 4]

console.log(jump2(nums))

//wrong!!!! no funciona
export function jump(nums: number[]): number {
    var jumps = []
    var i = 0
    while (i < nums.length && nums.length > 0) {
        var maxJumpLength = nums[i]
        var bestJumpLength = 0
        var nextJumpIndex = 0
        if (i + maxJumpLength >= nums.length - 1) {
            jumps.push(i)
            break;

        }

        for (var j = i + maxJumpLength; j > i; j--) {
            if (nums[j] > bestJumpLength) {
                bestJumpLength = nums[j]
                nextJumpIndex = j
            }
        }

        jumps.push(nextJumpIndex)
        i = nextJumpIndex
        bestJumpLength = 0
    }
    return jumps.length
};

// greedy algorithm search!
export function jump2(nums: number[]) {
    console.log('Start!')
    let jumps = 0, currentEnd = 0, farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        console.log('   index is ' + i)
        console.log('       and farthest = ' + farthest)
        console.log('       i === currentEnd = ' + (i === currentEnd))
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
        console.log('       so now jumps = ' + jumps + ' and currentEnd = ' + currentEnd)
    }
    console.log('End!')
    return jumps;
}