import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";
// import { useTheme } from "../../ui/useThemetoggler";

import Spinner from "../../ui/Spinner";
import ProductList from "./ProductLists";
import ProductGrid from "./ProductGrids";

import useGetFilteredProduct from "../../Utility/getFilteredProduct";
import Pagination from "../../ui/Pagination";

function Product() {
  // const { dark } = useTheme();

  const [layout, setLayout] = useState("list");

  const { search } = useLocation();

  const { isLoading, data, error } = useGetFilteredProduct(search);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="mt-10">
        <div className="flex justify-between">
          <h1 className=" font-inter ">22 products </h1>
          <div className="flex gap-3">
            <BsFillGridFill
              className="h-8 w-8 rounded-full p-1 hover:bg-gray-500"
              onClick={() => setLayout("list")}
            />
            <BsList
              className="h-8 w-8 rounded-full p-1 hover:bg-gray-500"
              onClick={() => setLayout("grid")}
            />
          </div>
        </div>
        <hr className="mb-20 mt-5 border-gray-200 dark:border-gray-700" />
        {layout === "list" ? (
          <ProductGrid productData={data} />
        ) : (
          <ProductList productData={data} />
        )}
      </div>
      <Pagination productData={data} />
    </>
  );
}

export default Product;
