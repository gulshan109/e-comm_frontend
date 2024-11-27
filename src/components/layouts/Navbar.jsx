import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
import toast from "react-hot-toast";

import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaBagShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();


  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout Successfully");
  };

  return (
    <header className=" flex w-screen bg-orange-400 h-[13%] justify-center  shadow-xl rounded-b-2xl sm:flex ">
      <nav className=" flex h-[100%] w-[95%] items-center justify-between md:justify-between  ">
        <h1 className=" flex  items-center font-bold text-2xl h-[100%] w-[100%] sm:w-[50%] md:w-[30%] xl:w-[30%]  ">
          <Link to="/" className=" flex justify-center items-center gap-2">
            {" "}
            <FaCartShopping />
            Shopping App
          </Link>
        </h1>
        <div className=" justify-center items-center   w-[30%] h-[100%] gap-4 hidden sm:justify-end sm:hidden md:flex xl:w-[30%]  xl:flex xl:justify-center ">
          <input
            type="text"
            placeholder=" Search"
            className=" border px-4 py-2 rounded-xl "
          />
          <button className=" border px-4 py-2 rounded-xl hover:bg-blue-500 font-bold">
            Search
          </button>
        </div>
        <div className=" flex justify-center  items-center md:hidden w-[10%] h-[100%] xl:hidden  ">
          <ul className=" flex justify-center  items-center">
            <li
              className=" font-bold text-2xl"
              onClick={() => {
                setIsOpen((prevs) => !prevs);
              }}
            >
              {isOpen ? <ImCross /> : <TiThMenuOutline />}
            </li>
          </ul>
        </div>
        {isOpen && (
          <div className=" flex w-[35vw] h-[80%] bg-orange-400 absolute top-16 right-0 flex-col md:hidden xl:hidden  ">
            <div className=" flex h-[10%] w-[100%] justify-center items-center gap-2 ">
              <input
                type="text"
                placeholder="Search"
                className="  flex justify-center items-center rounded-lg w-[70%] py-1 "
              />
              <button className=" border border-orange-700 py-1 px-2 rounded-lg">
                Search
              </button>
            </div>
            <ul className=" flex flex-col items-center w-[100%] gap-1 my-2 h-[90%] ">
              <li className=" bg-orange-500 w-[100%] h-[10%] flex justify-center items-center text-lg font-bold transition-shadow">
                <Link
                  className=" flex justify-center items-center gap-2"
                  to="/"
                >
                  {" "}
                  <FaHome />
                  Home
                </Link>
              </li>
              <li className=" bg-orange-500 w-[100%] h-[10%] flex justify-center items-center text-lg font-bold ">
                <Link
                  className=" flex justify-center items-center gap-2"
                  to="/category"
                >
                  <BiCategory />
                  Category
                </Link>
              </li>
              <li className=" bg-orange-500 w-[100%] h-[10%] flex justify-center items-center text-lg font-bold ">
                <Link
                  className=" flex justify-center items-center gap-2"
                  to="/cartpage"
                >
                  {" "}
                  <FaBagShopping />
                  Cart
                </Link>
              </li>
              <li className=" bg-orange-500 w-[100%] h-[10%] flex justify-center items-center text-lg font-bold ">
                <Link
                  className=" flex justify-center items-center gap-2"
                  to="/signin"
                >
                  {" "}
                  <FaSignInAlt />
                  SignIn
                </Link>
              </li>
              <li className=" bg-orange-500 w-[100%] h-[10%] flex justify-center items-center text-lg font-bold ">
                <Link
                  className=" flex justify-center items-center gap-2"
                  to="/login"
                >
                  {" "}
                  <IoLogIn />
                  LogIn
                </Link>
              </li>
              <li className=" bg-orange-500 w-[100%] h-[10%] flex justify-center items-center text-lg font-bold ">
                <Link
                  className=" flex justify-center items-center gap-2"
                  to="/profile"
                >
                  {" "}
                  <CgProfile />
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        )}

        <ul className="  w-[40%] h-[100%] justify-center items-center   gap-10 hidden sm:hidden md:flex xl:flex sm:w-[25%] xl:w-[40%]  ">
          <li className=" hover:text-gray-600 hover:underline font-semibold">
            <NavLink
              to="/"
              className={(e) => {
                return e.isActive ? "text-orange-900 " : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <li className=" hover:text-gray-600  font-semibold hover:underline">
            <NavLink
              to="/category"
              className={(e) => {
                return e.isActive ? "text-orange-900" : "";
              }}
            >
              Category
            </NavLink>
          </li>

          <li className=" hover:text-gray-600 hover:underline font-semibold">
            <NavLink
              to="/cartpage"
              className=" flex flex-row justify-center items-center gap-1"
            >
              Cart <FaBagShopping />
            </NavLink>
          </li>
          <div className=" flex justify-center items-center gap-4 font-semibold">
            {!auth.user ? (
              <>
                <li className=" hover:text-gray-600 hover:underline font-semibold">
                  <NavLink
                    to="/signin"
                    className={(e) => {
                      return e.isActive ? "text-red-500 " : "";
                    }}
                  >
                    SignIn
                  </NavLink>
                </li>
                <li className=" hover:text-gray-600 hover:underline font-semibold">
                  <NavLink
                    to="/login"
                    className={(e) => {
                      return e.isActive ? " text-red-500" : "";
                    }}
                  >
                    LogIn
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <div className=" flex justify-center items-center" >
                  <NavLink 
                    className=" flex justify-center items-center  text-xl gap-1"
                    onClick={() => {
                      setIsOpen((prev) => !prev);
                    } 
                  }
                  >
                    <CgProfile />

                    {auth?.user?.name}
                    {!isOpen ? <IoMdArrowDropup /> : <FaCaretDown />}
                  </NavLink>
                  {isOpen && (
                    <ul className=" flex flex-col relative top-16 right-24  bg-orange-400 w-[100%] ">
                      <li className=" flex justify-center items-center hover:bg-orange-500">
                        <Link to={`/dashboard/${auth?.user?.role === "admin" ? "admin" : "user"}`}>Dashboard</Link>
                      </li>
                      <li className=" flex justify-center items-center hover:bg-orange-500 py-2 px-4">
                        <Link
                          to="/login"
                          onClick={handleLogout}
                          className={(e) => {
                            return e.isActive ? "text-red-500" : "";
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
