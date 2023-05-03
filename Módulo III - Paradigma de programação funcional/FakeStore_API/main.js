//Busca todos os produtos
module.exports.getAllProducts = async () => {
  try {
    const url = "https://fakestoreapi.com/products/";
    const result = fetch(url).then((res) => res.json());
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

//Busca um produto
module.exports.getAProduct = (id) => {
  const url = "https://fakestoreapi.com/products/" + id;
  const result = fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

//Busca todas as categorias
module.exports.getAllCategories = () => {
  const url = "https://fakestoreapi.com/products/categories";
  const result = fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

//Busca todos os produtos em uma categoria
module.exports.getAllProductsInACategory = (category) => {
  const url = "https://fakestoreapi.com/products/category/" + category;
  const result = fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

//Busca produtos com Rate igual ou maior que 4
module.exports.getAllProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

module.exports.getAllProductsWithRateAboveFour = async () => {
  const products = [];
  const allProducts = await getAllProducts();

  for (let index = 0; index < allProducts.length; index++) {
    const product = allProducts[index];
    if (product.rating.rate >= 4) {
      products.push(product);
    }
    console.log(products);
  }
};

//Busca o produto com mais votos
module.exports.getTheProducs = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

module.exports.getTheProductWithTheMostVotes = async () => {
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

//Faz a média dos valores dos produtos
module.exports.getTheProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

module.exports.getTheAverageOfAllTheValues = async () => {
  const allProducts = await getTheProducts();
  let totalPrice = 0;

  for (let index = 0; index < allProducts.length; index++) {
    const product = allProducts[index];
    totalPrice += product.price;
  }

  return totalPrice / allProducts.length;
};

//Busca o produto mais caro
module.exports.getTheProducts1 = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

module.exports.getTheMostExpensiveProduct = async () => {
  const allProducts = await getTheProducts1();
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

//Busca o produto mais barato
module.exports.getProducts = async () => {
  const url = "https://fakestoreapi.com/products/";
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

module.exports.getTheCheapestProduct = async () => {
  const allProducts = await getProducts();
  let lowestPriceProduct = allProducts[0];

  for (let i = 1; i < allProducts.length; i++) {
    const product = allProducts[i];
    if (product.price < lowestPriceProduct.price) {
      lowestPriceProduct = product;
    }
  }

  return lowestPriceProduct;
};
