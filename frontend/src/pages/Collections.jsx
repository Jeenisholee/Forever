import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import Productitems from "../components/Productitems";

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState("relevant");

  // Toggle Category
  const toggleCategory = (e) => {
    const value = e.target.value;

    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  // Toggle SubCategory
  const toggleSubCategory = (e) => {
    const value = e.target.value;

    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  // Apply Filters + Sorting
  useEffect(() => {
    let productsCopy = [...products];

    if (showSearch && search) {
    productsCopy = productsCopy.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    };

    // Filter Category
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    // Filter SubCategory
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    // Sort Products
    switch (sortType) {
      case "low-high":
        productsCopy.sort((a, b) => a.price - b.price);
        break;

      case "high-low":
        productsCopy.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    setFilterProducts(productsCopy);
  }, [products, category, subCategory, sortType, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t">
      {/* FILTER SECTION */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilters(!showFilters)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${
              showFilters ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* CATEGORY FILTER */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>

          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {["Men", "Women", "Kids"].map((item, index) => (
              <label key={index} className="flex gap-2 cursor-pointer">
                <input
                  className="w-3"
                  type="checkbox"
                  value={item}
                  onChange={toggleCategory}
                />

                {item}
              </label>
            ))}
          </div>
        </div>

        {/* SUB CATEGORY FILTER */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>

          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((item, index) => (
              <label key={index} className="flex gap-2 cursor-pointer">
                <input
                  className="w-3"
                  type="checkbox"
                  value={item}
                  onChange={toggleSubCategory}
                />

                {item}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1">
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-3 py-2 outline-none"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <Productitems
              key={item._id}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
