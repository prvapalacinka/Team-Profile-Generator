// Employee test

// name: '';
// id: '';
// email:'';
var Employee = require('../lib/Employee');


test ('should generate name property where the value of a new employees name is kept', () => {
    const newObj = new Employee('petar');
    expect(newObj.name).toBe('petar');

});

test ('should generate name property where the value of a new employees name is kept', () => {
    const newObj = new Employee('', 3);
    expect(newObj.id).toBe(3);

});