import React from "react";
import AdminMenu from "../../layouts/AdminMenu";

const Products = () => {
  return (
    <section className=" flex w-[100%] h-[100%] bg-gray-400 ">
      <article className=" flex w-[100%] h-[100%]  ">
        <main className=" flex w-[20%] h-[100%] ">
          <AdminMenu />
        </main>
        <main className=" flex w-[80%] h-[100%]bg-green-300 ">
          <h1 className=" ">products </h1>
        </main>
      </article>
    </section>
  );
};

export default Products;
