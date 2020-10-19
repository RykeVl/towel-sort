// You should implement your task here.



module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    let total = [],
        reverse = false;

    function goDeep(arr) {
        if (reverse) {
            for (let i = arr.length - 1; i >= 0; i--) {
                if (Array.isArray(arr[i])) {
                    goDeep(arr[i]);
                    reverse = !reverse;
                } else {
                    total.push(arr[i]);
                }
            }
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {                    
                    goDeep(arr[i]);
                    reverse = !reverse;
                } else {
                    total.push(arr[i]);
                }
            }
        }
    }

    goDeep(matrix);
    return total;
}
