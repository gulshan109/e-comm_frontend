import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryForm from "../../form/CategoryForm";
import { useAuth } from "../../context/Auth";

const CategoryCreate = () => {
  const [category, setCategory] = useState();
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [auth, setAuth] = useAuth();


  const isLogged = async()=>{

    try {
      const logged = await axios.get("http://localhost:9000/user/isLogged")
      if(logged?.data?.success){
        console.log( logged.data?.success , " logged status");
        
        } else{
          console.log("not logged");
        }
      
    } catch (error) {
      console.log("something went woring" , error);
      
    }

  }
  
  useEffect(() => {
    isLogged()
  }, [])
  
  // handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {

      const { data } = await axios.post(
        "http://localhost:9000/category/createCategory",
        { name },{withCredentials:true}
      );
      if (data?.success) {
        console.log("category is created");
        isLogged()
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
        "http://localhost:9000/category/findAllCategory",
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        //   withCredentials:true
        // },
      );
      console.log(data);
      if (data?.success) {
        setCategory(data?.category);
      }
    } catch (error) {
      console.log(error, "error in get all category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // category update

  // const handleUpdate = async(e)=>{
  //     e.preventDefault();
  //     try {
  //         const {data} = await axios.put(`http://localhost:9000/category/updateCategory/${selected._id}` , {name : updatedName});
  //         if(data?.success){
  //             console.log("category is updated");
  //             setSelected(null);
  //             setUpdatedName("");
  //             setVisible(false);
  //             getAllCategory();

  //         } else{
  //             console.log("error in update category");
  //         }
  //     } catch (error) {
  //         console.log(error);

  //     }
  // };

  // delete category
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:9000/category/deleteCategory/${id}`
      );
      if (data?.category) {
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
    <section className=" flex w-[100%] h-[100%]  justify-center">
      <article className=" flex w-[90%] h-[100%]  ">
        <main className=" flex w-[100%] h-[100%] gap-4 flex-col ">
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
            <table className=" flex w-[90%] h-[90%] border shadow-xl shadow-orange-300">
              <thead className=" flex  w-[100%] h-[90%] justify-center ">
                <tr className=" flex w-[80%] h-[100%] justify-between items-center  ">
                  <th className="  w-[40%] h-[100%]">Name</th>
                  <th className="  w-[40%] h-[100%] ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {category?.map((c) => (
                  <>
                    <tr>
                      <td key={c._id}>{c.name}</td>
                      <button
                        onClick={() => {
                          setVisible(true),
                            setSelected(c),
                            setUpdatedName(c.name);
                        }}
                      >
                        Edit
                      </button>
                      <button onClick={handleDelete}>Delete</button>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </article>
    </section>
  );
};

export default CategoryCreate;
