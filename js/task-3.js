function getElementWidth(content, padding, border) {
  const totalPadding = Number.parseInt(padding) * 2;
  const totalBorderWidth = Number.parseFloat(border) * 2;
  const result = Number.parseInt(content) + totalPadding + totalBorderWidth;
  return result;
}

console.log("Logs for Task 3:");

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
