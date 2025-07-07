function ProductForm({ formData, setFormData, updateProduct, addProduct }) {
  return (
    <div className="bg-secondary w-50 py-5 mb-5 d-flex align-items-center flex-column gap-3">
      <h3>{formData.productId ? "Update Product" : "Add Product"}</h3>
      <input
        className="w-75 fs-5 ps-2 "
        type="text"
        value={formData.title}
        placeholder="Title"
        onChange={(e) => setFormData.setTitle(e.target.value)}
      />
      
      <input
        className="w-75 fs-5 ps-2 "
        type="text"
        value={formData.description}
        placeholder="Description"
        onChange={(e) => setFormData.setDescription(e.target.value)}
      />{" "}
      
      <input
        className="w-75 fs-5 ps-2 "
        type="number"
        value={formData.price}
        placeholder="Price"
        onChange={(e) => setFormData.setPrice(e.target.value)}
      />{" "}
     
      {formData.productId ? (
        <button className="btn btn-primary" onClick={updateProduct}>
          Update Product
        </button>
      ) : (
        <button className="btn btn-primary" onClick={addProduct}>
          Add Product
        </button>
      )}
    </div>
  );
}

export default ProductForm;
