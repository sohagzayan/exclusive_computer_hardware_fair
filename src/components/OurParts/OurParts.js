import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Loading from "../Loading/Loading";
import OurPartsProducts from "../OurPartsProducts/OurPartsProducts";

const OurParts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/tools/getToolswithOutAuth/?limit=6`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <div className="mt-10">
      <div>
        <h2 className=" text-own-secondary dark:text-own-white text-3xl  text-center block tracking-widest font-semibold mb-3">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {data?.map((item) => (
            <OurPartsProducts item={item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center ">
        <NavLink
          to="/buy_products"
          className="btn-animation flex justify-center items-center"
        >
          All Products
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavLink>
      </div>
    </div>
  );
};

export default OurParts;
