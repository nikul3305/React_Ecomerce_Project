import { useEffect, useState } from 'react';
import ProductTable from './Component/ProductTable';
import ProductForm from './Component/ProductForm';
import { getProduct, deleteProduct, updateProduct, addProduct } from './Component/ProductApi';
function App() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [productId, setProductId] = useState(null);

   useEffect(() => {
    ProductList();
  }, []);

  function ProductList() {
    getProduct().then(resp => {
      setProducts(resp.products);
    });
  }

  function Delete(id) {
    deleteProduct(id).then(() => {
      const updatedProducts = products.filter(item => item.id !== id);
      setProducts(updatedProducts);
      alert("product deleted successfully");
    });
  }

  function handleUpdate() {
    const item = { title, description, price };
    updateProduct(productId, item).then(() => {
      const updatedProducts = products.map(prod =>
        prod.id === productId ? { ...prod, title, description, price } : prod
      );
      setProducts(updatedProducts);
      resetForm();
      alert("product updated successfully");
    });
  }

  function handleAdd() {
    if (!title.trim() || !description.trim() || !price) {
        alert("pls fill all fields");
        return;
    }
    const item = { title, description, price };
    addProduct(item).then(resp => {
      setProducts([resp, ...products]);
      resetForm();
      alert("product added successfully")
    });
  }

  function selectProduct(product) {
    setTitle(product.title);
    setPrice(product.price);
    setDescription(product.description);
    setProductId(product.id);
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setPrice("");
    setProductId(null);
  }

  return (
    <>
      <div className="container-fluid bg-primary  d-flex align-items-center flex-column w-100">
        <h1 >CRUD operation</h1>
        <ProductForm 
          formData={{ title, description, price, productId }}
          setFormData={{ setTitle, setDescription, setPrice }}
          addProduct={handleAdd}
          updateProduct={handleUpdate}
        />
        <ProductTable products={products} deleteProduct={Delete} selectProduct={selectProduct}/>
      </div>
    </>
  );
}

export default App;
