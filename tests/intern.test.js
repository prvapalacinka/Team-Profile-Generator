// intern test
const Intern = require("../lib/Intern");

test ('the school property for intern should be generated', () => {
    const newObj = new Intern('', '', '', 'Harvard University');
    expect(newObj.school).toBe('Harvard University');

});