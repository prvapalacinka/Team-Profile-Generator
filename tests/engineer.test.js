// engineer test
const Engineer = require("../lib/Engineer");

test ('office number property for manager should be generated', () => {
    const newObj = new Engineer('', '', '', 'supersonicbaklava@github.com');
    expect(newObj.github).toBe('supersonicbaklava@github.com');

});