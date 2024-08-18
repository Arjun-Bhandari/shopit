import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "./productListSlice";
import FilterLayout from "../../components/FilterLayout";




export default function ProductList(props) {
  //   const product = useSelector();
  //   const dispatch = useDispatch();

  
  return (
    <div>
        {<FilterLayout/>}
    </div>
  );
}
