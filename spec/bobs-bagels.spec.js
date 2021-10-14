const test = require('../test-frameworks');
const Item = require('../src/Item');
const Basket = require('../src/Basket');

test.it('Checking if Bagel has name', () => {
    let input;
    let expectedOutput;
    let result;
    let cheese = new Item('cheese');

    input = 'cheese';
    expectedOutput = 'cheese';
    result = cheese.name;
    test.assertEquals(expectedOutput, result);
})


test.it('Testing if basket has item', () => {
    let input;
    let expectedOutput;
    let result;

    let basket = new Basket();
    let bagel1 = new Item('bagel');
    basket.addItem(bagel1);

    expectedOutput = 1;
    input = bagel1;
    result = basket.items.length
    test.assertEquals(expectedOutput, result);
});



test.it('Testing if we can remove item from basket', () => {
    let input;
    let expectedOutput;
    let result;

    let basket = new Basket();
    let bagel1 = new Item('bagel');
    basket.addItem(bagel1);
    basket.removeItem();

    expectedOutput = 0;
    input = bagel1;
    result = basket.items.length
    test.assertEquals(expectedOutput, result);
});


test.it('Testing if we can remove specific item from basket', () => {
    let input;
    let expectedOutput;
    let result;

    let basket = new Basket();
    let bagel1 = new Item('bagel');
    let bagel2 = new Item('bagel');
    basket.addItem(bagel1);
    basket.addItem(bagel2);
    basket.removeItem(bagel1);

    expectedOutput = true;
    input = bagel2;
    result = basket.items.includes(input);
    test.assertEquals(expectedOutput, result);
});



