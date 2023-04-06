const stringLength = require('../Functions/task1.js');


  test('Check for valid String Characters Length', () => {
    expect(stringLength('')).toBe('Invalid String');
    expect(stringLength('Nabeel Ahmed')).toBe('Invalid String');
    expect(stringLength('NA')).toBe(2);
    expect(stringLength('Nabeel')).toBe(6);
    expect(stringLength('1234567890')).toBe(10);
    expect(stringLength('12345678910')).toBe('Invalid String');
  });