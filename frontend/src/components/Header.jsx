import {
  ChevronLeft,
  Menu,
  SearchIcon,
  ShoppingCart,
  User,
  UserCircleIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useShopStore } from "../stores/useShopStore";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setShowSearch } = useShopStore();
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">Logo</Link>

      <ul className="hidden sm:flex gap-5 text-sm text-white">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white" />
        </NavLink>

        <NavLink
          to={"/collections"}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white" />
        </NavLink>

        <NavLink className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white" />
        </NavLink>

        <NavLink className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <SearchIcon
          className="w-5 cursor-pointer"
          onClick={() => setShowSearch(true)}
        />

        <div className="group relative">
          <User className="w-5 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <ShoppingCart className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">
            10
          </p>
        </Link>

        <Menu
          onClick={() => setIsOpen(true)}
          className="w-5 cursor-pointer md:hidden"
        />
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`absolute z-[999] top-0 right-0 bottom-0 overflow-hidden bg-white transition-all  ${
          isOpen ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <ChevronLeft className="h-4" />
            <p>Back</p>
          </div>
          <NavLink className="py-2 pl-6 border" to={"/"}>
            HOME
          </NavLink>
          <NavLink className="py-2 pl-6 border" to={"/"}>
            COLLECTION
          </NavLink>
          <NavLink className="py-2 pl-6 border" to={"/"}>
            ABOUT
          </NavLink>
          <NavLink className="py-2 pl-6 border" to={"/"}>
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
