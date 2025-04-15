/**
 Do not return anything, modify nums1 in-place instead.
 */
const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3

merge2(nums1, m, nums2, n)

// esta es lenta
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    nums1.splice(m)

    nums1.push(...nums2)

    nums1.sort((a, b) => a - b)

    console.log(nums1)
}


// esta es rápida
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {

    var a = m - 1
    var b = n - 1

    for (var i = nums1.length - 1; i >= 0; i--) {

        if (a == -1) {
            nums1[i] = nums2[b]
            b--
            continue
        }

        if (b == -1) {
            continue
        }

        if (nums1[a] > nums2[b]) {
            nums1[i] = nums1[a]
            a--
        } else {
            nums1[i] = nums2[b]
            b--
        }
    }

    console.log(nums1)
}


