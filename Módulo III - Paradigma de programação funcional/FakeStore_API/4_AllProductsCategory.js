const getAllProductsInACategory = (category) => {
  const url = "https://fakestoreapi.com/products/category/" + category;
  const result = fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

getAllProductsInACategory("jewelery");
