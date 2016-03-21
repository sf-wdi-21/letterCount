describe("letterCounter", function() {
  var letterCount = require('../letterCount.js');

  it("returns an Object", function(){
    expect(letterCount()).toEqual({});
  });

  it("counts the frequency of letters in a given word", function() {
    var word = "banana";
    expect(letterCount(word)).toEqual({
      b: 1,
      a: 3,
      n: 2
    });
  });

  it("coverts uppercase letters to lowercase before counting", function() {
    var word = "bAnaNa";
    expect(letterCount(word)).toEqual({
      b: 1,
      a: 3,
      n: 2
    });
  });

  it("only counts alphabet characters", function() {
    var word = "holy $#!7";
    expect(letterCount(word)).toEqual({
      h: 1,
      o: 1,
      l: 1,
      y: 1
    });
  });
});
