const chai = require('chai');
const assert = chai.assert;

const Main = require('./test_function.js');

const termDefinitions = {
  "to": "Three",
  "won": "two",
  "for": "five",
  "ten": 'eleven'
}


describe('BaseCase Test:', () => {
  it ('Today I won an award for being awesome. -> Threeday I two an award five being awesome.', (done) => {
    assert.equal(Main.inflateString('Today I won an award for being awesome.', termDefinitions),
    'Threeday I two an award five being awesome.');
    done();
  });
});

describe('My Test:', () => {
  it ('I completed this with tenure. -> I completed this with elevenure.', (done) => {
    assert.equal(Main.inflateString('I completed this with tenure.', termDefinitions),
    'I completed this with elevenure.');
    done();
  });
});

describe('Another One:', () => {
  it ('Good fortune is a virtue. -> Good fivetune is a virtue.', (done) => {
    assert.equal(Main.inflateString('Good fortune is a virtue.', termDefinitions),
    'Good fivetune is a virtue.');
    done();
  });
});
