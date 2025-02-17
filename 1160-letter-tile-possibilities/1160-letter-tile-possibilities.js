/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
        let set = new Set();
    
    function backtrack(path, remaining) {
        if (path) set.add(path); // Add only non-empty sequences
        
        for (let i = 0; i < remaining.length; i++) {
            backtrack(path + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
        }
    }
    
    backtrack("", tiles);
    return set.size;
};