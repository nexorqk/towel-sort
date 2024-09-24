// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    const res = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            matrix[i].forEach((item) => res.push(item));
        } else {
            matrix[i].reverse().forEach((item) => res.push(item));
        }
    }

    return res;
};
