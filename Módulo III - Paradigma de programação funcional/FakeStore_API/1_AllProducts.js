const getAllProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  const result = fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

getAllProducts();
