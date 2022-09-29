import Cookies from "js-cookie";
import React from "react";
import { useCurrentUserQuery } from "../../store/API/user";

const Profile = ({ handleUserProfile }) => {
  const userid = Cookies.get("id");
  const response = useCurrentUserQuery(userid);
  return (
    <>
      <span
        onClick={handleUserProfile}
        className="bg-own-ternary overflow-hidden inline-block p-1 rounded-full cursor-pointer"
      >
        <img
          className="w-[40px] rounded-full"
          src={response?.data?.currentuser[0]?.image}
          alt=""
        />
      </span>
    </>
  );
};

export default Profile;