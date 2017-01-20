var expect = require('chai').expect;
var summarizeBasket = require('../index').summarizeBasket;
var getUnique = require('../Index').getUnique;

let prices = { banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 };
let products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato',
'potato', 'tomato', 'potato' ];

describe('summarizeBasket', function(){
  it('Empty basket should return 0 for each value', function(){
    var result = summarizeBasket({}, []);
    expect(result.prices).to.be.equal(0);
    expect(result.countArticles).to.be.equal(0);
    expect(result.countProducts).to.be.equal(0);
  })

  it('Basket with only one product should return price of the product', function(){
    var result = summarizeBasket(prices, ['cucumber']);
    expect(result.prices).to.be.equal(4);
    expect(result.countArticles).to.be.equal(1);
    expect(result.countProducts).to.be.equal(1);
  })

  it('Basket with 2 products should return basic sum of prices', function(){
    var result = summarizeBasket(prices, ['cucumber', 'apple']);
    expect(result.prices).to.be.equal(10);
    expect(result.countArticles).to.be.equal(2);
    expect(result.countProducts).to.be.equal(2);
  })

  it('Basket with 2 same products should return basic sum of prices', function(){
    var result = summarizeBasket(prices, ['apple', 'apple']);
    expect(result.prices).to.be.equal(12);
    expect(result.countArticles).to.be.equal(2);
    expect(result.countProducts).to.be.equal(1);
  })
})

describe('getUnique', function(){
  it('Empty array should return a new array empty', function(){
    var result = getUnique([]);
    expect(result).to.be.empty;
  })
  it('Array with 1 product should return a array with one value', function(){
    var result = getUnique(['apple']);
    expect(result).to.be.eql(['apple']);
  })
  it('Array with 2 same products should return a array with one value', function(){
    var result = getUnique(['apple', 'apple']);
    expect(result).to.be.eql(['apple']);
  })
  it('Array with 2 diff products should return a array with 2 values', function(){
    var result = getUnique(['cucumber', 'apple']);
    expect(result).to.be.eql(['cucumber', 'apple']);
  })
  it('Array with 3 diff products should return a array with 2 values', function(){
    var result = getUnique(['cucumber', 'apple', 'apple']);
    expect(result).to.be.eql(['cucumber', 'apple']);
  })
})
