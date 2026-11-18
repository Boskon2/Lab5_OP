'use strict';

const seq = (...a) => (...m) => typeof m[0] !== 'number' ? seq(...a, ...m)
: a.reduceRight((x, f) => f(x), m[0]);

module.exports = { seq };
