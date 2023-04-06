const reverseString = require('../Functions/task2.js');

  test('Check String Reversal', () => {
      expect(reverseString('Hello Micro')).toBe('orciM olleH');
      expect(reverseString('Bye NAC')).toBe('CAN eyB');
      expect(reverseString('See you at 1800')).toBe('0081 ta uoy eeS');
});
