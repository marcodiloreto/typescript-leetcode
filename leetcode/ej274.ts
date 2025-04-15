const citations = [3, 0, 6, 1, 5]

console.log(hIndexOptimal(citations))

function hIndex(citations: number[]): number {

    let matches = []

    for (var h = citations.length; h >= 0; h--) {

        for (let i = 0; i < citations.length; i++) {
            if (citations[i] >= h) matches.push(i)
        }

        if (matches.length >= h) {
            break;
        }

        matches = []
    }

    return h
};

export function hIndexOptimal(citations: number[]) {
    citations.sort((a, b) => b - a); // Sort in descending order 
    console.log(citations)
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break; // No need to continue if the current citation is less than the index + 1
        }
    }
    return h;
}