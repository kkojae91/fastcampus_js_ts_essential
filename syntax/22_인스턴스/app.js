function CartV1() {
  this.cart = [];
  this.currentId = 0;
}

// prototype 속성에 getNewId함수를 넣고 있다. prototype 속성에 넣을 경우 인스턴스 객체에 등장하게 될 메소드라고 생각하면 된다.
CartV1.prototype.getNewId = function () {
  this.currentId++;
  return this.currentId;
};

// createItem은 CartV1 자체에 함수를 넣고 있다. 인스턴스 객체에는 드러나지 않습니다.
CartV1.createItem = function (name, price) {
  return {
    name,
    price,
  };
};

CartV1.prototype.addItem = function (item) {
  this.cart.push({
    ...item,
    id: this.getNewId(),
  });
};

CartV1.prototype.clearCart = function (item) {
  this.cart = [];
  this.currentId = 0;
};

const shoppingCartV1 = new CartV1();

shoppingCartV1.addItem(CartV1.createItem("수박", 8000));
shoppingCartV1.addItem(CartV1.createItem("사과", 12000));
shoppingCartV1.addItem(CartV1.createItem("두부", 2000));

console.log(shoppingCartV1.cart);

class CartV2 {
  // static 인스턴스 객체에는 드라나지 않고 class자체에 붙어 있는 속성.
  static createItem = (name, price) => ({
    name,
    price,
  });

  cart;
  currentId;

  constructor() {
    this.currentId = 0;
    this.cart = [];
  }

  getNewId = () => {
    this.currentId++;
    return this.currentId;
  };

  addItem = (item) => {
    this.cart.push({
      ...item,
      id: this.getNewId(),
    });
  };

  clearCart = () => {
    this.currentId = 0;
    this.cart = [];
  };
}

const shoppingCartV2 = new CartV2();

shoppingCartV2.addItem(CartV2.createItem("수박", 8000));
shoppingCartV2.addItem(CartV2.createItem("사과", 12000));
shoppingCartV2.addItem(CartV2.createItem("두부", 2000));

console.log(shoppingCartV2.cart);
