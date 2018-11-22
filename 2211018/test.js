const assert = require('assert').strict;
const subSumModule = require('subsum');
const {solve, cleanEdges, groupSimilars} = subSumModule;

describe('solve functionality', () => {
  it('sum === 5', () => {
    assert.equal(solve([-1,2,3,-9]), 5);
  });
  it('sum === 6', () => {
    assert.equal(solve([2,-1,2,3,-9]), 6);
  });
  it('sum === 11', () => {
    assert.equal(solve([-1,2,3,-9,11]), 11);
  });
  it('sum === 3', () => {
    assert.equal(solve([-2,-1,1,2]), 3);
  });
  it('sum === 100', () => {
    assert.equal(solve([100,-9,2,-3,5]), 100);
  });
  it('sum === 6', () => {
    assert.equal(solve([1,2,3]), 6);
  });
});
