var uniqueOccurrences = function(arr) {
    let freqMap = new Map();

    // Count occurrences of each number
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Get all frequencies
    let occurrences = [...freqMap.values()];

    // Check if occurrences are unique
    let uniqueSet = new Set(occurrences);

    return occurrences.length === uniqueSet.size;
};
