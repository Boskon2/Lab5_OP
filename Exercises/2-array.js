'use strict';

const array = () => {
    const data = [];
    const accessor = (i) => data[i];
    accessor.push = (x) => data.push(x);
    accessor.pop = () => data.pop();
    return accessor;
};

module.exports = { array };
