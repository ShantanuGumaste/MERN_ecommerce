export const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);

export const updateCart = ( state ) => {
  // Calculate Item Price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Calculate delivery Price (If order over ₹10000 then free, else ₹1000 delivery charge)
  state.deliveryPrice = addDecimals(state.itemsPrice > 10000 ? 0 : 1000);

  // Calculate TaGSTx Price
  state.gstPrice = addDecimals(Number((0.18 * state.itemsPrice).toFixed(2)));

  // Calculate Total Price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.deliveryPrice) +
    Number(state.gstPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));
};
