import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryForm from "../../form/CategoryForm";
import { useAuth } from "../../context/Auth";
import { Modal } from "antd";
import AdminMenu from "../../layouts/AdminMenu";

const CategoryCreate = () => {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [auth, setAuth] = useAuth();
  let token = JSON.parse(localStorage.getItem("auth")).token;

  const isLogged = async () => {
    try {
      const logged = await axios.get(
        `http://localhost:9000/user/isLogged/${token}`
      );
      if (logged?.data?.success) {
        console.log(logged.data?.success, " logged status");
      } else {
        console.log("not logged");
      }
    } catch (error) {
      console.log("something went woring", error);
    }
  };

  useEffect(() => {
    isLogged();
  }, [category]);

  // handle form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:9000/category/createCategory/${token}`,
        { name },
        { withCredentials: true }
      );
      if (data?.success) {
        console.log("category is created");
        isLogged();
        getAllCategory();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:9000/category/findAllCategory/${token}`
      );
      console.log(data);
      if (data?.success) {
        setCategory(data.data);
      }
    } catch (error) {
      console.log(error, "error in get all category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // category update

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:9000/category/updateCategory/${selected._id}/${token}`,
        { name: updatedName }
      );
      if (data?.success) {
        console.log("category is updated");
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        console.log("error in update category");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // delete category
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const { data } = await axios.delete(
        `http://localhost:9000/category/deleteCategory/${id}/${token}`
      );
      
      if (data.success) {
        console.log("category is deleted");
        getAllCategory();
      } else {
        console.log("error in delete category");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className=" flex w-[100%] h-[79vh]  justify-center ">
      <article className=" flex w-[100%] h-[100%] ">
        <main className=" flex w-[20%] h-[100%]  ">
        <AdminMenu/>
        </main>
        <main className=" flex w-[80%] h-[100%] gap-4 flex-col ">
          <h1 className=" flex justify-center items-center w-[100%] h-[10%] font-bold text-2xl  ">
            Create category{" "}
          </h1>
          <div className=" flex w-[60%] h-[10%] justify-center items-center ">
            <CategoryForm
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            />
          </div>
          <div className=" flex w-[100%] h-[80%] justify-center  items-center border shadow-inner shadow-orange-300 ">
            <table className=" flex w-[100%] h-[100%] border shadow-xl shadow-orange-300 flex-col rounded-xl">
              <thead className=" flex  w-[100%] h-[10%] justify-center  ">
                <tr className=" flex w-[80%] h-[100%] justify-between  ">
                  <th className="  w-[40%] h-[100%] ">Name</th>
                  <th className="  w-[40%] h-[100%] ">Actions</th>
                </tr>
              </thead>
              <tbody className="  flex flex-col w-[100%] h-[90%] overflow-scroll py-2 px-8  ">
                {category?.map((c) => (
                  <>
                    <tr className=" flex justify-between">
                      <td key={c._id}>{c.name}</td>
                      <td className=" flex justify-center items-center gap-4 ">
                        <button
                          className=" bg-blue-600 flex py-2 px-4 rounded-xl"
                          onClick={() => {
                            setVisible(true),
                              setSelected(c),
                              setUpdatedName(c.name);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          className=" bg-blue-600 flex py-2 px-4 rounded-xl"
                          onClick={()=>{handleDelete(c._id)}}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <Modal
            onCancel={() => {
              setVisible(false);
            }}
            footer={null}
            open={visible}
          >
            <CategoryForm
              value={updatedName}
              setValue={setUpdatedName}
              handleSubmit={handleUpdate}
            />
          </Modal>
        </main>
      </article>
    </section>
  );
};

export default CategoryCreate;
