export function unitPriceFormatStr(
  unitPrice: number,
  unitsNumber: number,
): string {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice: number): string {
  return `$${unitPrice.toFixed(2)}`;
}

export function totalPriceFormatStr(
  unitPrice: number,
  unitsNumber: number,
): string {
  const totalPrice = unitPrice * unitsNumber;

  return `Total: $${totalPrice.toFixed(2)}`;
}
