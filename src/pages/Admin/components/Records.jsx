import React from "react";
import CustomDiv from "./CustomDiv";

const records = ({ data }) => {
  return (
    <div>
      <div className="flex gap-2 mx-2">
        {data?.[0]?.cards?.map((item, idx) => (
          <>
            <div className="w-1/3 gap-4 border-r-2 border-gray-300">
              <h1 className="text-xl font-bold">Product {idx + 1}</h1>
              <CustomDiv heading={"title"} detail={item?.title} />
              <CustomDiv heading={"Desc"} detail={item?.description} />
            </div>
          </>
        ))}
      </div>
      <hr className="my-6 h-[2px]  bg-gray-200 border-0 dark:bg-slate-300" />
      <div className="flex flex-col ml-2">
        <h1 className="text-xl font-bold">Carousel Data</h1>

        <CustomDiv
          heading={"image path"}
          detail={"http://localhost:5000/" + data?.[0]?.image}
        />
        <CustomDiv
          heading={"video path"}
          detail={"http://localhost:5000/" + data?.[0]?.video}
        />
        <CustomDiv
          heading={"Giff path"}
          detail={"http://localhost:5000/" + data?.[0]?.giff}
        />
      </div>
    </div>
  );
};

export default records;
