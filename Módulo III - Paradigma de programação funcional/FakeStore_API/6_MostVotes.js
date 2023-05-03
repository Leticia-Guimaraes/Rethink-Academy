const getTheProducs = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getTheProductWithTheMostVotes = async () => {
  const allProducts = await getTheProducs();
  let maxCount = 0;
  let productWithTheMostVotes;

  for (let index = 0; index < allProducts.length; index++) {
    const product = allProducts[index];
    if (product.rating.count > maxCount) {
      maxCount = product.rating.count;
      productWithTheMostVotes = product;
    }
  }

  return productWithTheMostVotes;
};

getTheProductWithTheMostVotes()
  .then((product) => console.log(product))
  .catch((error) => console.error(error));
