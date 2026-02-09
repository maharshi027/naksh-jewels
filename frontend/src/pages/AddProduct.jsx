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
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select a product image");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", Number(form.price));
    formData.append("description", form.description);
    formData.append("stock", Number(form.stock));
    formData.append("image", imageFile); // ✅ FIXED

    try {
      await createProductApi(formData);
      alert("Product added successfully");

      setForm({ name: "", price: "", description: "", stock: 1 });
      setImageFile(null);
      setPreview(null);
    } catch (err) {
      console.error("Add product failed:", err.response?.data || err);
      alert("Failed to add product");
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        {preview && (
          <img
            src={preview}
            alt="preview"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        )}

        <input
          type="number"
          name="stock"
          min="0"
          value={form.stock}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
