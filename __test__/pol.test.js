'use strict';

let pol = require('../pol.js');

describe('proof of life', () => {

  it('lives by default', () => {
    expect(pol.isAlive()).toBeFalsy();
  });

  it('dies with a param', () => {
    expect(pol.isAlive('x')).toBeTruthy();
  });

});
