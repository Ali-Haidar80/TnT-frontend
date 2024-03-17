import React from "react";
import { LuChevronRightCircle } from "react-icons/lu";

const ProductCard = ({ data, expanded, onClick }) => {
  return (
    <div
      className={`flex pb-2 duration-300 transition-all justify-between  flex-col gap-2 leading-tight border-t-4 ${
        data.border
      } bg-[#faf7f7] py-6 px-4 ${
        expanded === data?.value
          ? "!w-full !h-full "
          : expanded === 0
          ? "w-full h-full"
          : "!w-0 !h-0 overflow-hidden !p-0"
      } `}
    >
      <div>
      <img src={data.icon} className="h-10 w-10" alt="" />
      <h2 className="font-bold text-xl">{data.title}</h2>
      <p className="whitespace-pre-line">{data.description}</p>
      </div>
      <div>
      <LuChevronRightCircle
        style={{ stroke: data?.color }}
        className={`${
          expanded === data?.value ? "rotate-[180deg]" : "rotate-[0deg]"
        } duration-300 transition-all text-2xl ms-auto cursor-pointer`}
        onClick={() => onClick(data?.value)}
      />
      </div>
    </div>
  );
};

export default ProductCard;
