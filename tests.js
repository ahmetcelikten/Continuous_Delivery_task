// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

/**
 * TASK #4: Automated Test Cases for Roman-Integer Converter
 */

// --- Tests for integerToRoman function ---
describe('integerToRoman - Functionality Tests', function() {
  
  it('should convert single digits correctly (1 to "I", 5 to "V", 9 to "IX")', function() {
    expect(integerToRoman(1)).to.equal('I');
    expect(integerToRoman(5)).to.equal('V');
    expect(integerToRoman(9)).to.equal('IX');
  });

  it('should convert double and triple digits (40 to "XL", 90 to "XC", 400 to "CD")', function() {
    expect(integerToRoman(40)).to.equal('XL');
    expect(integerToRoman(90)).to.equal('XC');
    expect(integerToRoman(400)).to.equal('CD');
  });

  it('should convert complex numbers (1987 to "MCMLXXXVII")', function() {
    expect(integerToRoman(1987)).to.equal('MCMLXXXVII');
  });

  it('should convert the maximum allowed value (3999 to "MMMCMXCIX")', function() {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  // Boundary and Error Tests
  it('should throw an error for numbers less than 1 (Boundary: 0)', function() {
    expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw an error for numbers greater than 3999 (Boundary: 4000)', function() {
    expect(() => integerToRoman(4000)).to.throw("The number must be between 1 and 3999.");
  });
});

// --- Tests for romanToInteger function ---
describe('romanToInteger - Functionality Tests', function() {

  it('should convert basic symbols correctly ("X" to 10, "L" to 50, "C" to 100)', function() {
    expect(romanToInteger('X')).to.equal(10);
    expect(romanToInteger('L')).to.equal(50);
    expect(romanToInteger('C')).to.equal(100);
  });

  it('should handle subtractive notation ("IV" to 4, "IX" to 9, "CM" to 900)', function() {
    expect(romanToInteger('IV')).to.equal(4);
    expect(romanToInteger('IX')).to.equal(9);
    expect(romanToInteger('CM')).to.equal(900);
  });

  it('should handle lowercase input ("x" to 10, "iv" to 4)', function() {
    expect(romanToInteger('x')).to.equal(10);
    expect(romanToInteger('iv')).to.equal(4);
  });

  // Validation and Edge Case Tests
  it('should throw an error for empty or whitespace strings', function() {
    expect(() => romanToInteger('')).to.throw("Input must be a valid Roman numeral.");
    expect(() => romanToInteger('   ')).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw an error for invalid characters (e.g., "G", "123", "X A")', function() {
    expect(() => romanToInteger('XG')).to.throw("The Roman numeral contains invalid characters.");
    expect(() => romanToInteger('123')).to.throw("The Roman numeral contains invalid characters.");
  });

  it('should throw an error for non-canonical forms (e.g., "IIII" instead of "IV")', function() {
    // This tests the rule that 4 must be IV, not IIII
    expect(() => romanToInteger('IIII')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for incorrect order (e.g., "IC" is invalid)', function() {
    // 99 should be XCIX, not IC
    expect(() => romanToInteger('IC')).to.throw("The Roman numeral is not in canonical form.");
  });
});