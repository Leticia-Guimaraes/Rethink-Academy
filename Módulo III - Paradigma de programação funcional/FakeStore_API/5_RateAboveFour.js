const getAllProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getAllProductsWithRateAboveFour = async () => {
  const products = [];
  const allProducts = await getAllProducts();

  for (let index = 0; index < allProducts.length; index++) {
    const product = allProducts[index];
    if (product.rating.rate > 4) {
      products.push(product);
    }
    console.log(products);
  }
};

getAllProductsWithRateAboveFour();
