function uniqueValues(element, index, array) {
  return array.indexOf(element) === index;
}
function orderAccendingByNumbers(a, b) {
  return Number(a) - Number(b);
}

export {
  uniqueValues,
  orderAccendingByNumbers,
};
