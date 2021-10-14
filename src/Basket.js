class Basket {
    constructor(initialItems = []) {
        this.items = initialItems
    };
    addItem(item) {
        this.items.push(item);
    };
    removeItem(item) {
        this.items.splice(item, 1);
    };
};

module.exports = Basket;

