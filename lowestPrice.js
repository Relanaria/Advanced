function price(array) {
  let cities = [];
  let items = new Set();

  for (const token of array) {
    let [city, item, price] = token.split(" | ");
    items.add(item);

    cities.push({ city, item, price });
  }

  for (const item of items) {
    let minPrice = Number.MAX_VALUE;
    let town = "";
    for (const product of cities) {
      if (item === product.item) {
        if (product.price < minPrice) {
          minPrice = Number(product.price);
          town = product.city;
        }
      }
    }
    console.log(`${item} -> ${minPrice} (${town})`);
  }
}

price([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
