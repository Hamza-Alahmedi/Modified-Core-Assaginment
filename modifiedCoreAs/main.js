import {
  itemDetails,
  updateItemQuantity,
  setUpdatFinalTotalCB,
} from "./modules/itemDetails.js";
import createOrderLine from "./modules/createOrderLine.js";
import createOrderLineEditor from "./modules/createOrderLineEditor.js";
import { calculateFinalTotal } from "./modules/order.js";

const itemPrice = document.getElementById("item-price");
const totalBefore = document.getElementById("total-before-discount");
const discount = document.getElementById("discount");

const totalAfter = document.getElementById("total-after-discount");

const orderLineEditor = createOrderLineEditor();

const orderLines = itemDetails.map((item) =>
  createOrderLine(item, orderLineEditor.showItemDetails)
);

const generateItemTable = () => {
  const tableBody = document.querySelector("table tbody");
  orderLines.forEach((orderLine) => tableBody.appendChild(orderLine.render()));
  console.log("table generated");
};

generateItemTable();
orderLineEditor.showItemDetails(orderLines[0]);

const finalTotal = calculateFinalTotal(itemDetails);
totalAfter.textContent = "$" + finalTotal.toFixed(2);

setUpdatFinalTotalCB((finalTotal) => {
  totalAfter.textContent = "$" + finalTotal.toFixed(2);
});
