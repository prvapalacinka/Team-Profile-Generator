// const { default: test } = require('node:test');
var Employee = require('../lib/Employee');


test ('should generate name property where the value of a new employees name is kept', () => {
    const newObj = new Employee('petar');
    expect(newObj.name).toBe('petar');

});

test ('should generate a new property where the value of a new employees number is kept', () => {
    const newObj = new Employee('', 3);
    expect(newObj.id).toBe(3);

});
