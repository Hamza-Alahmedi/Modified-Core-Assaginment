import { calculateFinalTotal } from "./order.js";

// the list of all items and thier details
const itemDetails = [
  {
    id: "1",
    name: "Organic Hass Avocado",
    image: "/images/avocado.png",
    quantity: "1",
    price: "15",
  },
  {
    id: "2",
    name: "Frash watermelon",
    image: "/images/watermelon.png",
    quantity: "1",
    price: "15.99",
  },
  {
    id: "3",
    name: "Strawberry",
    image: "/images/strawberry.png",
    quantity: "1",
    price: "17.99",
  },
  {
    id: "4",
    name: "Tomato",
    image: "/images/tomato.png",
    quantity: "1",
    price: "3",
  },
  {
    id: "5",
    name: "Orange",
    image: "/images/orange.png",
    quantity: "1",
    price: "7",
  },
  {
    id: "6",
    name: "Organic Hass Avocado",
    image: "/images/avocado.png",
    quantity: "1",
    price: "15",
  },
  {
    id: "7",
    name: "Frash watermelon",
    image: "/images/watermelon.png",
    quantity: "1",
    price: "15.99",
  },
  {
    id: "8",
    name: "Strawberry",
    image: "/images/strawberry.png",
    quantity: "1",
    price: "17.99",
  },
  {
    id: "9",
    name: "Tomato",
    image: "/images/tomato.png",
    quantity: "1",
    price: "3",
  },
  {
    id: "10",
    name: "Orange",
    image: "/images/orange.png",
    quantity: "1",
    price: "7",
  },
  {
    id: "11",
    name: "Organic Hass Avocado",
    image: "/images/avocado.png",
    quantity: "1",
    price: "15",
  },
  {
    id: "12",
    name: "Frash watermelon",
    image: "/images/watermelon.png",
    quantity: "1",
    price: "15.99",
  },
  {
    id: "13",
    name: "Strawberry",
    image: "/images/strawberry.png",
    quantity: "1",
    price: "17.99",
  },
  {
    id: "14",
    name: "Tomato",
    image: "/images/tomato.png",
    quantity: "1",
    price: "3",
  },
  {
    id: "15",
    name: "Orange",
    image: "/images/orange.png",
    quantity: "1",
    price: "7",
  },
];

// define callback varible
let updateFinalTotalCB;

function updateFinalTotal() {
  const finalTotal = calculateFinalTotal(itemDetails);
  if (updateFinalTotalCB && typeof updateFinalTotalCB === "function") {
    updateFinalTotalCB(finalTotal);
  }
}

function setUpdatFinalTotalCB(callBack) {
  updateFinalTotalCB = callBack;
}

//todo update quantity in orderline

function updateItemQuantity(itemID, newQuantity) {
  //console.log(`Item ID: ${itemID}, New quantity: ${newQuantity}`);
  const itemToUpdate = itemDetails.find((item) => item.id === itemID);
  itemToUpdate.quantity = newQuantity;
  updateFinalTotal();
}

export { itemDetails, updateItemQuantity, setUpdatFinalTotalCB };
