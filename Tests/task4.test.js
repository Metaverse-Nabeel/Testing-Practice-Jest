const capitalizeFirstCharacter = require('../Functions/task4.js');

  test('Check Capitalize First Character String', () => {
      expect(capitalizeFirstCharacter('learning')).toBe('Learning');
      expect(capitalizeFirstCharacter('nAC')).toBe('NAC');
      expect(capitalizeFirstCharacter('i am Nabeel')).toBe('I am Nabeel');
      expect(capitalizeFirstCharacter('developer')).toBe('Developer');
});
