/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
    let commonCount = Array.from(words[0]).reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    for (let i = 1; i < words.length; i++) {
        const currentCount = Array.from(words[i]).reduce((acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {});

        for (let char in commonCount) {
            if (currentCount[char]) {
                commonCount[char] = Math.min(commonCount[char], currentCount[char]);
            } else {
                delete commonCount[char];
            }
        }
    }
    const result = [];
    for (let char in commonCount) {
        for (let i = 0; i < commonCount[char]; i++) {
            result.push(char);
        }
    }

    return result;
}
