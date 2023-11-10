import { updateItemQuantity } from "./itemDetails.js";
function createOrderLineEditor(item) {
  const self = {
    item: item,
    get quantity() {
      return +document.getElementById("quantity").value;
    },
    set quantity(value) {
      document.getElementById("quantity").value = value;
    },

    get price() {
      return +document.getElementById("item-price").textContent;
    },
    set price(value) {
      document.getElementById("item-price").textContent = value;
    },

    set name(value) {
      document.getElementById("item-name").textContent = value;
    },
    set image(value) {
      document.getElementById("item-image").src = value;
    },
    set totalPrice(value) {
      document.getElementById("total-item-price").textContent =
        value.toFixed(2);
    },
    //updateTableCallBack: updateTableCB,
  };

  // self.updateTableCallBack = function () {
  //   // Call the function to update the item quantity in your data source
  //   if (updateTableCB && typeof updateTableCB === "function") {
  //     updateTableCB();
  //   } else {
  //     console.log(" not called here");
  //   }
  // };

  self.updateQuantity = function (newQuantity) {
    self.quantity = newQuantity;
    self.item.quantity = newQuantity; // Update the item's quantity
    updateItemQuantity(self.item.id, newQuantity);
    // updateFinalTotalCB();
  };

  self.printItemDetails = function (item) {
    console.log("Item ID:", item.id);
    console.log("Item Name:", item.name);
    console.log("Item Quantity:", item.quantity);
  };

  self.showItemDetails = function (item) {
    self.item = item; //set the self item to the showen  item
    //console.log(item.name);
    // Update the item details in the HTML by the clicked item
    self.name = item.name;
    self.image = item.image;
    self.price = item.price;
    self.quantity = item.quantity;
    self.totalPrice = item.price * item.quantity;
  };

  self.increaseQuantity = function () {
    self.quantity++;
    self.totalPrice = self.quantity * self.price;
    self.updateQuantity(self.quantity); // calling update Quantity
    //self.updateTableCallBack();
    console.log(typeof updateTableCB);
  };

  self.decreaseQuantity = function () {
    if (self.quantity > 0) {
      self.quantity--;
      self.totalPrice = self.quantity * self.price;
      self.updateQuantity(self.quantity); // calling update Quantity
    }
  };

  self.createEvents = function () {
    document.getElementById("increase").onclick = self.increaseQuantity;
    document.getElementById("decrease").onclick = self.decreaseQuantity;
  };

  self.init = function () {
    self.createEvents();
  };
  return self;
}

export default (updateTableCB) => {
  const obj = createOrderLineEditor(updateTableCB);
  obj.init();

  return obj;
};
