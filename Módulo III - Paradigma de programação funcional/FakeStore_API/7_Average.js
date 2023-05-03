const getTheProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getTheAverageOfAllTheValues = async () => {
  const allProducts = await getTheProducts();
  let totalPrice = 0;

  for (let index = 0; index < allProducts.length; index++) {
    const product = allProducts[index];
    totalPrice += product.price;
  }

  return totalPrice / allProducts.length;
};

getTheAverageOfAllTheValues()
  .then((average) => console.log(average))
  .catch((error) => console.error(error));
