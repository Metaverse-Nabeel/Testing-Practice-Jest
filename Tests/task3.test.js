const Calculator = require('../Functions/task3.js');

describe("Check Basic Calculator operations",()=>{
    test("Addition", ()=>{
        expect(Calculator.Add(10,2)).toBe(12);
        expect(Calculator.Add(7,4)).toBe(11);
    })
    test("Subtraction", ()=>{
        expect(Calculator.Subtract(11,2)).toBe(9);
        expect(Calculator.Subtract(1,5)).toBe(-4);
    })
    test("Mupltiplication", ()=>{
        expect(Calculator.Multiply(3,3)).toBe(9);
        expect(Calculator.Multiply(11,2)).toBe(22);
    })
    test("Division", ()=>{
        expect(Calculator.Divide(4,2)).toBe(2);
        expect(Calculator.Divide(9,3)).toBe(3);
    })
})