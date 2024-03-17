import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidEditAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { deleteData } from "../../../services/admin";

const Actions = ({ data }) => {
  const navigate = useNavigate();
  const adminID = data?.[0]?.id;
  const card1ID = data?.[0]?.cards[0]?.id;
  const card2ID = data?.[0]?.cards[1]?.id;
  const card3ID = data?.[0]?.cards[2]?.id;

  async function handleDelete() {
    const res = await deleteData({adminID,card1ID,card2ID,card3ID})
  }
  return (
    <div className="text-xl flex justify-end mx-8 my-4 gap-3">
      <Link
        class=" bg-white p-2 rounded-full hover:bg-gray-200 shadow-md text-blue-400 text-2xl transition duration-1000 ease-in-out"
        data-te-toggle="tooltip"
        title="Add Data"
        to={"/my-admin-panel/add-data"}
      >
        <IoAddCircleOutline />
      </Link>
      <div
        onClick={() =>
          navigate("/my-admin-panel/modify-data", { state: { data } })
        }
        class=" bg-white p-2 rounded-full hover:bg-gray-200  shadow-md text-green-400 text-2xl transition duration-1000 ease-in-out"
        data-te-toggle="tooltip"
        title="Update Data"
      >
        <BiSolidEditAlt />{" "}
      </div>
      <div
        onClick={handleDelete}
        class=" bg-white cursor-pointer p-2 rounded-full hover:bg-gray-200  shadow-md text-red-400 text-2xl transition duration-1000 ease-in-out"
        data-te-toggle="tooltip"
        title="Delete Data"
      >
        <BsFillTrashFill />
      </div>
    </div>
  );
};

export default Actions;
