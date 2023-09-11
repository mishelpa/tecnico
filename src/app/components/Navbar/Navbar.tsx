import React from "react";
import Image from "next/image";
import  "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="nav w-full py-4 px-4 sm:px-16">
        <div id="container-nav" className="container-nav flex justify-between">
          <div className="container-nav__left">
            <Image
              width={74}
              height={36}
              className=""
              src="../../../logo.svg"
              alt="Logo Rimac"
            />
          </div>
          <div className="container-nav__right flex space-x-3">
            <p className="hidden sm:flex text-description font-semibold text-base">¡Compra por este medio!</p>
            <div
              className="text-phone flex space-x-3"
            >
              <Image               
                width={20}
                height={20}
                className="p-0 m-0"
                src="../../../phone.svg"
                alt="Logo phone">
              </Image>
              <span className="font-bold text-lg">(01) 411 6001</span>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
