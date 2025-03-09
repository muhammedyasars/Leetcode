var uniqueOccurrences = function(arr) {
    let freqMap = new Map();

    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    let occurrences = [...freqMap.values()];

    let uniqueSet = new Set(occurrences);

    return occurrences.length === uniqueSet.size;
};
