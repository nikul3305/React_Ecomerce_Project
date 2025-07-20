import { useFormik } from "formik";
 import * as Yup from "yup";
 
 const productSchema = Yup.object().shape({
   title:       
   Yup.string().min(2).max(30).required('please enter title'),
   description: 
   Yup.string().min(2).max(200).required('please enter description'),
    price:      
    Yup.string().min(2).max(10).required('please enter price'),
 });


function ProductForm({ formData, setFormData, updateProduct, addProduct }) {
 const initialValues = {
  title: formData.title || "",
  description: formData.description || "",
  price: formData.price || "",
};
  const {values, errors, touched, handleBlur, handleChange, handleSubmit } = 
  useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema : productSchema,
    onSubmit : (values, action)=>{
      console.log("values",values);
       if (formData.productId) {
          updateProduct({ ...values, id: formData.productId });
        } else {
          addProduct(values);
        }
      action.resetForm();
      setFormData({});
     }
 });

  return (
    <div  className=" w-50 py-5 mb-5 " style={{backgroundColor:"#555a58cc"}}>
      <form onSubmit={handleSubmit}  className=" d-flex align-items-center flex-column gap-2">
        <div className="w-75 fs-5 ps-2 ">
          <input type="text" name="title" className="w-100 ps-2" placeholder="enter title" value={ values.title} onChange={handleChange} onBlur={handleBlur}/>
          {errors.title && touched.title ? (<p style={{color:"red"}}>{errors.title}</p>) : null}
        </div>

        <div className="w-75 fs-5 ps-2 ">
          <input type="text" name="description" className="w-100 ps-2" placeholder="enter description" value={values.description} onChange={handleChange} onBlur={handleBlur}/>
         {errors.description && touched.description ? (<p style={{color:"red"}}> {errors.description}</p> ) : null }
        </div>

        <div className="w-75 fs-5 ps-2 ">
          <input type="text" name="price" className="w-100 ps-2 " placeholder="enter price" value={values.price} onChange={handleChange} onBlur={handleBlur}/>
           {errors.price && touched.price ? (<p style={{color:"red"}}> {errors.price}</p> ) : null }
        </div>
        <button type="submit" className="btn btn-primary">{formData.productId ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}

export default ProductForm;
