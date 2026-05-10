let expect, integerToRoman, romanToInteger;

// BAĞLANTI AYARI: Hem tarayıcıyı hem GitHub Actions'ı destekler
if (typeof require !== 'undefined') {
  expect = require('chai').expect;
  const functions = require('./script.js');
  integerToRoman = functions.integerToRoman;
  romanToInteger = functions.romanToInteger;
} else {
  expect = chai.expect;
}

describe('integerToRoman - Testleri', function() {
  it('1, 5 ve 9 sayılarını doğru çevirmeli', function() {
    expect(integerToRoman(1)).to.equal('I');
    expect(integerToRoman(5)).to.equal('V');
    expect(integerToRoman(9)).to.equal('IX');
  });

  it('Karmaşık sayıları doğru çevirmeli (1987 -> MCMLXXXVII)', function() {
    expect(integerToRoman(1987)).to.equal('MCMLXXXVII');
  });

  it('Hatalı aralıklarda (0 veya 4000) hata fırlatmalı', function() {
    expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");
    expect(() => integerToRoman(4000)).to.throw("The number must be between 1 and 3999.");
  });
});

describe('romanToInteger - Testleri', function() {
  it('Temel harfleri doğru çevirmeli (X, L, C)', function() {
    expect(romanToInteger('X')).to.equal(10);
    expect(romanToInteger('L')).to.equal(50);
    expect(romanToInteger('C')).to.equal(100);
  });

  it('Çıkarma kuralını (IV, IX) doğru uygulamalı', function() {
    expect(romanToInteger('IV')).to.equal(4);
    expect(romanToInteger('IX')).to.equal(9);
  });

  it('Kanonik olmayan yazımlarda (IIII) hata vermeli', function() {
    expect(() => romanToInteger('IIII')).to.throw("The Roman numeral is not in canonical form.");
  });
});
