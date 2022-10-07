//import './stringLength'

//const { require } = require("yargs");

const stringLength = require('./stringLength');

test('checks length of test to equal 4', () =>{
    expect(stringLength('test')).toBe(4);
});

test('checks length of unnecessary to equal error', () =>{
    expect(stringLength('unnecessary')).toBe('Error');
});