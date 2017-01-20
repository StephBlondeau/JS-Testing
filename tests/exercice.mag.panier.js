var expect = require('chai').expect;
var summarizeBasket = require('../index').summarizeBasket;

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
})
