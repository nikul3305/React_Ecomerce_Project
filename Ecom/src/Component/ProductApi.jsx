
// Get All Products
export function getProduct() {
  return fetch('https://dummyjson.com/products').then(res => res.json());
}

// Delete Product
export function deleteProduct(id) {
  return fetch(`https://dummyjson.com/products/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

// Update Product
export function updateProduct(productId, item) {
  return fetch(`https://dummyjson.com/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  }).then(res => res.json());
}

// Add Product
export function addProduct(item) {
  return fetch(`https://dummyjson.com/products/add`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  }).then(res => res.json());
}