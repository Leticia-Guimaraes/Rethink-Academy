const getTheProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getTheMostExpensiveProduct = async () => {
  const allProducts = await getTheProducts();
  let higherValue = 0;
  let theMostExpensiveProduct;

  for (let index = 0; index < allProducts.length; index++) {
    const product = allProducts[index];
    if (product.price > higherValue) {
      higherValue = product.price;
      theMostExpensiveProduct = product;
    }
  }

  return theMostExpensiveProduct;
};

getTheMostExpensiveProduct()
  .then((product) => console.log(product))
  .catch((error) => console.error(error));
