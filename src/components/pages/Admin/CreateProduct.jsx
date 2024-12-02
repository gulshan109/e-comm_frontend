import React, { useState, useEffect } from "react";
import AdminMenu from "../../layouts/AdminMenu";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
// import { Option } from Select;
let token = JSON.parse(localStorage.getItem("auth")).token;
import { FaIndianRupeeSign } from "react-icons/fa6";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  // get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:9000/category/findAllCategory/${token}`
      );
      // console.log(data.data);
      console.log("find all category");

      if (data?.success) {
        setCategories(data?.data);
        // console.log(data.data);
      }
    } catch (error) {
      console.log(error, "error in get all category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("category", category);
      productData.append("quantity", quantity);
      productData.append("shipping", shipping);
      productData.append("photo", photo);

      console.log(productData);
      const { data } = await axios.post(
        `http://localhost:9000/products/createProduct/${token}`,
        productData
      );
      console.log(data.data);

      if (data?.success) {
        console.log("Product created successfully");
        navigate("/dashboard/admin/products");
      } else {
        console.log(data?.message);
      }
    } catch (error) {
      console.log(error, "error in product creation");
    }
  };
  return (
    <section className=" flex w-[100%] h-[100%]  ">
      <article className=" flex w-[100%] h-[100%]  ">
        <main className=" flex w-[20%] h-[100%] ">
          <AdminMenu />
        </main>
        <main className=" flex w-[40%] justify-center  shadow-xl h-[100%] flex-col  ">
          <h1 className=" flex w-[100%] h-[10%]  px-20 font-bold text-xl items-center ">
            Create Products{" "}
          </h1>
          <div>
            <select
              placeholder="Enter your category"
              className=" flex w-[50%] border "
              onChange={(val) => setCategory(val)}
            >
              {categories.map((c, i) => {
                return (
                  <option key={i} value={c._id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
            <div className=" flex border ">
              <label className="flex  w-[40%] border justify-center items-center hover:bg-orange-400 rounded-xl ">
                {photo ? photo.name : "Upload photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  className="  hidden "
                  onChange={(e) => {
                    const file = e.target.files[0]; // Get the uploaded file
                    if (file) {
                      const reader = new FileReader();

                      // Once the file is read, convert it to Base64
                      reader.onload = () => {
                        const base64 = reader.result.split(",")[1]; // Extract the Base64 part
                        setPhoto(base64);
                        console.log(base64);
                        
                      };

                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            </div>
            <div className=" flex w-[20%] h-[20%] ">
              {photo && (
                <div>
                  <img src={URL.createObjectURL(photo)} alt="product_photo" />
                </div>
              )}
            </div>
          </div>
          <div className=" flex border ">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="write a Product name"
            />
          </div>
          <div className=" flex border ">
            <textarea
              name="description"
              placeholder="description"
              value={description}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className=" flex border items-center gap-4">
            <FaIndianRupeeSign />
            <input
              type="number"
              name="price"
              value={price}
              placeholder="write a price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className=" flex border   ">
            <input
              type="number"
              name="quantity"
              value={quantity}
              placeholder="write a quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className=" flex border ">
            <Select
              placeholder="select shipping"
              className=" flex w-[30%] "
              onChange={(value) => setShipping(value)}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </Select>
          </div>
          <div className=" flex border py-2">
            <button
              onClick={handleCreate}
              className=" flex py-2 px-4 border hover:bg-orange-400 rounded-xl"
            >
              Create Category
            </button>
          </div>
        </main>
      </article>
    </section>
  );
};

export default CreateProduct;
