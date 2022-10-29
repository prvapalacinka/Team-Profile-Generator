// manager test

const Manager = require("../lib/Manager");

test ('office number property for manager should be generated', () => {
    const newObj = new Manager('', '', '', 3);
    expect(newObj.officenumber).toBe(3);

});