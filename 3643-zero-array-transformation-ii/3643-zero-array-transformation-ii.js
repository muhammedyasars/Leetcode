function minZeroArray(nums, queries) {
    let n = nums.length;
    let m = queries.length;

    if (nums.every(num => num === 0)) return 0;

    function canMakeZero(k) {
        let temp = [...nums];
        let diff = new Array(n + 1).fill(0);

        for (let i = 0; i < k; i++) {
            let [l, r, val] = queries[i];
            diff[l] -= val;
            diff[r + 1] += val;
        }

        let curr = 0;
        for (let i = 0; i < n; i++) {
            curr += diff[i];
            temp[i] = Math.max(0, temp[i] + curr);
        }

        return temp.every(num => num === 0);
    }

    let left = 1, right = m, result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canMakeZero(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}

