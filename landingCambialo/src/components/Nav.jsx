import React from "react";
import img from "../assets/bodychat.png";

const Nav = () => {
  return (
    <div className="container_nav  rounded-b-xl flex  items-center ">
      <img src={img} className="logo py-5 " />

      <div>
        <h1 className="font-serif font-bold p-5 text-3xl text-white  ">
          CAMBIA-LO
        </h1>
      </div>
    </div>
  );
};

export default Nav;
