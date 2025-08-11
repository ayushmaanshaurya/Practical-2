const products = [
    { name: "T-Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Headphones", category: "electronics" },
    { name: "Smartphone", category: "electronics" },
    { name: "Novel", category: "books" },
    { name: "Cookbook", category: "books" }
  ];
  
  const categoryFilter = document.getElementById("categoryFilter");
  const productList = document.getElementById("productList");
  
  function displayProducts(filter) {
    productList.innerHTML = "";
    const filteredProducts = filter === "all" 
      ? products 
      : products.filter(p => p.category === filter);
  
    filteredProducts.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product");
      div.textContent = product.name;
      productList.appendChild(div);
    });
  }
  
  categoryFilter.addEventListener("change", () => {
    displayProducts(categoryFilter.value);
  });
  
  displayProducts("all"); // Initial load
  
