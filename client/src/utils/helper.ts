export const formattedPrice = (price: number) => {
  return new Intl.NumberFormat('de-DE').format(price)
}
