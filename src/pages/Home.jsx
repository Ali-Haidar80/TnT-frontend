import React, { useEffect, useState } from "react";
import Carousoel from "../components/Carousoel";
import { GoArrowRight } from "react-icons/go";
import ProductCard from "../components/Card";
import { cardData } from "../lib/data";
import Navbar from "../components/Navbar";
import { getData } from "../services/admin";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [expanded, setExpanded] = useState(0);
  const [data, setData] = useState(null);

  const handleClickExpand = (value) => {
    setExpanded(expanded === value ? 0 : value);
  };

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
    <>
      <Navbar />
      <div className="flex w-full align-middle gap-4 px-12 lg:flex-nowrap flex-wrap">
        <div className="w-[50%]">
          <div className="mt-16">
            <h3 className="text-[#939393]">Hello world!</h3>
            <h1 className="text-black font-extrabold text-[3rem] leading-none tracking-tight">
              {data?.[0]?.heading ||
                "We are creative agency. We build digital work that you will love!"}
            </h1>
            <button className="mt-6 flex items-center gap-1 text-white bg-[#FF9700] font-medium py-4 px-6 ">
              Explore our portfolio <GoArrowRight />
            </button>
          </div>
          <div className="flex w-full items-end mt-4 gap-3">
            {data?.[0]?.cards?.map((data, idx) => {
              return (
                <>
                  {
                    <ProductCard
                      key={data.id}
                      data={{
                        ...data,
                        border: cardData?.[idx]?.border,
                        color: cardData?.[idx]?.color,
                        icon: cardData?.[idx]?.icon,
                        value: cardData?.[idx]?.icon,
                      }}
                      expanded={expanded}
                      onClick={handleClickExpand}
                    />
                  }
                </>
              );
            })}
          </div>
        </div>
        <div className="!h-full lg:!w-[50%] w-full text-white align-middle">
          <Carousoel data={data} />
        </div>
      </div>
    </>
  );
};

export default Home;
