import React, { useEffect, useState } from "react";
import Actions from "./components/Actions";
import Records from "./components/Records";
import { getData } from "../../services/admin";
import { toast } from "react-toastify";

const Admin = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    try {
      const res = await getData();
      setData(res?.splice(-1));
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div className="bg-gray-100 h-[100vh]">
      <h1 className="font-bold text-center text-3xl py-2 capitalize border-b-slate-400 border-b-2 text-gray-700  bg-slate-200">
        welcome to TNT Admin Panel Customize things here!
      </h1>
      
      <Actions data={data}/>
      <Records data={data}/>

    </div>
  );
};

export default Admin;
