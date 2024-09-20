import React, { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { useShopStore } from "../stores/useShopStore";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useShopStore();
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collections")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          id="search"
          className="flex-1 outline-none text-black bg-inherit text-sm"
          placeholder="Search..."
        />
        <Search className="w-4" />
      </div>
      <X
        onClick={() => setShowSearch(false)}
        className="inline size-4 cursor-pointer text-black"
      />
    </div>
  ) : null;
};

export default Searchbar;
