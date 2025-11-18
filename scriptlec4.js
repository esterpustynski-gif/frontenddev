const list = document.getElementById("products");
const products = [{name: "coffee" , price: 5}, {name: "cake", price: 3}, {name: "water", price: 2}];
console.log(products[0].name + " costs " + products[0].price);
products[1].price = 4;
products.forEach(product => {
   let text = product.name + " costs " + product.price;
   console.log(text);
   let li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
});
products[1].price = 4;