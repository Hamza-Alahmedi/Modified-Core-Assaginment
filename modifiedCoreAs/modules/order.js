function calculateFinalTotal(itemDetails) {
  const totals = itemDetails.map((item) => item.price * item.quantity);
  const finalTotal = totals.reduce((finalTot, totals) => finalTot + totals, 0);

  return finalTotal;

  console.log("Final Total: $" + finalTotal);
}

export { calculateFinalTotal };
