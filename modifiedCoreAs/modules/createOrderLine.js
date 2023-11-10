function createOrderLine(item, onclickCallback) {
  const self = {
    item: item,
    id: item.id,
    name: item.name,
    image: item.image,
    quantity: item.quantity,
    price: item.price,
    onclickCallback: onclickCallback,

    render: function () {
      const row = document.createElement("tr");
      //create td
      const idCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const quantityCell = document.createElement("td");
      const priceCell = document.createElement("td");

      //add item detaile to the td
      idCell.textContent = this.id;
      nameCell.textContent = this.name;
      quantityCell.textContent = this.quantity;
      priceCell.textContent = "$" + this.price;

      // add the td to the created row
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(quantityCell);
      row.appendChild(priceCell);
      row.onclick = () => {
        if (
          this.onclickCallback &&
          typeof this.onclickCallback === "function"
        ) {
          this.onclickCallback({
            source: this,
            item: this.item, //** */
            id: this.id,
            name: this.name,
            image: this.image,
            quantity: this.quantity,
            price: this.price,
          });
        }
      };
      return row;
    },
  };

  return self;
}

export const generateItemTable = (orderLines) => {
  const tableBody = document.querySelector("table tbody");
  orderLines.forEach((orderLine) => tableBody.appendChild(orderLine.render()));
  console.log("table generated");
};

export default (item, onclickCallback) =>
  createOrderLine(item, onclickCallback);
