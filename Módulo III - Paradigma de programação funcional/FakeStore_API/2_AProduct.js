const getAProduct = (id) => {
  const url = "https://fakestoreapi.com/products/" + id;
  const result = fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

getAProduct(1);
