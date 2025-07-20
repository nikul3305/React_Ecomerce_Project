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
      const deleteProducts = products.filter(item => item.id !== id);
      setProducts(deleteProducts);
      alert("product deleted successfully");
    });
  }

function handleUpdate(item) {
  updateProduct(item.id, item).then(() => {
    const updatedProducts = products.map(prod =>
      prod.id === item.id ? item : prod
    );
    setProducts(updatedProducts);
    alert("product updated successfully");
  });
}

  function handleAdd(item) {
    addProduct(item).then(resp => {
      setProducts([resp, ...products]);
      alert("product added successfully")
    });
  }

  function selectProduct(product) {
    setTitle(product.title);
    setPrice(product.price);
    setDescription(product.description);
    setProductId(product.id);
  }



  return (
    <>
      <div className="container-fluid bg-primary  d-flex align-items-center flex-column w-100">
        <h1 >CRUD operation</h1>
        <ProductForm 
          formData={{ title, description, price, productId }}
          setFormData={(data) => {
              setTitle(data.title || "");
              setDescription(data.description || "");
              setPrice(data.price || "");
              setProductId(data.productId || null);
            }}

          addProduct={handleAdd}
          updateProduct={handleUpdate}
        />
        <ProductTable products={products} deleteProduct={Delete} selectProduct={selectProduct}/>
      </div>
    </>
  );
}

export default App;