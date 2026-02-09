import { useState } from "react";
import { createProductApi } from "../api/api";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    stock: 1,
  });

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file)); // Better way for UI preview
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!imageFile) return alert("Please upload an image");

  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("price", form.price);
  formData.append("description", form.description);
  formData.append("stock", form.stock);
  
  // This sends the actual file binary, not a string
  formData.append("image", imageFile); 

  try {
    await createProductApi(formData);
    alert("Product added!");
  } catch (error) {
    console.error("Upload Error:", error.response?.data || error.message);
  }
};
  return (
    <div className="add-product-container">
      <div className="card">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="input-group">
            <label>Product Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Price ($)</label>
            <input type="number" name="price" value={form.price} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Product Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </div>

          {preview && (
            <div className="preview-container">
              <img src={preview} alt="preview" />
            </div>
          )}

          <div className="input-group">
            <label>Stock Quantity</label>
            <input type="number" name="stock" value={form.stock} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} />
          </div>

          <button type="submit" className="submit-btn">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;