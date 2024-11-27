import React from "react";
import AdminMenu from "../../layouts/AdminMenu";
import { Outlet } from "react-router-dom";

const AdminOrder = () => {
  return (
    <section className=" flex w-[100%] h-[100%] ">
      <article className=" flex w-[100%] h-[100%]  ">
        <main className=" flex w-[100%] h-[100%] ">
          <Outlet />
          <h1>admin order </h1>
        </main>
      </article>
    </section>
  );
};

export default AdminOrder;
