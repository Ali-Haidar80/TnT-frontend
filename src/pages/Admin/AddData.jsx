import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addData } from "../../services/admin";

const AddData = () => {
  const history = useNavigate();
  const [inputData, setInputData] = useState({
    heading: "",
    image: null,
    video: null,
    giff: null,
    products: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
  });

  const handleProductInputChange = (index, key, value) => {
    const updatedProducts = [...inputData.products];
    updatedProducts[index][key] = value;

    setInputData({
      ...inputData,
      products: updatedProducts,
    });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      // Add products data to formData
      for (const product of inputData.products) {
        formData.append("title[]", product.title);
        formData.append("description[]", product.description);
      }

      // Add other data to formData
      formData.append("heading", inputData.heading);
      formData.append("image", inputData.image);
      formData.append("video", inputData.video);
      formData.append("giff", inputData.giff);
      const res = await addData(formData);
      if (res.status === 201) {
        history("/");
      } else {
        toast.error("Ops! Something went wrong");
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="mx-10 my-6">
      <button
        onClick={() => history("/my-admin-panel")}
        className="bg-orange-400 p-2 rounded-md flex items-center gap-2 text-white font-bold"
      >
        <GoArrowLeft /> Go Back
      </button>
      <form action="">
        <label htmlFor="" className="font-bold capitalize">
          Heading
        </label>
        <input
          onChange={(e) =>
            setInputData({ ...inputData, heading: e.target.value })
          }
          type="text"
          name="heading"
          placeholder="heading"
          className="mt-[0.3rem] border border-[#000] rounded-[5px] focus:outline-[#ff9f1c] block text-[1.2rem] w-[100%] p-[0.4rem]"
        />
        {inputData.products.map((product, index) => (
          <div key={index}>
            <h1 className="text-lg font-bold">{`Product ${
              index + 1
            } Details`}</h1>
            <input
              onChange={(e) =>
                handleProductInputChange(index, "title", e.target.value)
              }
              type="text"
              name={`title${index + 1}`}
              placeholder="Title"
              className="mt-[0.3rem] border border-[#000] rounded-[5px] focus:outline-[#ff9f1c] block text-[1.2rem] w-[100%] p-[0.4rem]"
            />
            <input
              onChange={(e) =>
                handleProductInputChange(index, "description", e.target.value)
              }
              type="text"
              name={`Description${index + 1}`}
              placeholder="Description"
              className="mt-[0.3rem] border border-[#000] rounded-[5px] focus:outline-[#ff9f1c] block text-[1.2rem] w-[100%] p-[0.4rem]"
            />
          </div>
        ))}
        <h1 className="text-lg font-bold mt-2 mb-1">Carousel Details</h1>
        <label htmlFor="" className="font-bold capitalize">
          uplaod an image
        </label>
        <input
          onChange={(e) =>
            setInputData({ ...inputData, image: e.target.files[0] })
          }
          type="file"
          name="img"
          accept=".jpg,.jpeg,.png"
          placeholder=""
          className="mt-[0.3rem] border border-[#000] rounded-[5px] focus:outline-[#ff9f1c] block text-[1.2rem] w-[100%] p-[0.4rem]"
        />
        <label htmlFor="" className="font-bold capitalize">
          uplaod a video
        </label>
        <input
          onChange={(e) =>
            setInputData({ ...inputData, video: e.target.files[0] })
          }
          type="file"
          name="video"
          accept=".mp4,.mkv,.ts"
          placeholder="video"
          className="mt-[0.3rem] border border-[#000] rounded-[5px] focus:outline-[#ff9f1c] block text-[1.2rem] w-[100%] p-[0.4rem]"
        />
        <label htmlFor="" className="font-bold capitalize">
          uplaod a giphy
        </label>
        <input
          onChange={(e) =>
            setInputData({ ...inputData, giff: e.target.files[0] })
          }
          type="file"
          name="giff"
          accept=".mp4,.gif,jfif"
          placeholder="giff"
          className="mt-[0.3rem] border border-[#000] rounded-[5px] focus:outline-[#ff9f1c] block text-[1.2rem] w-[100%] p-[0.4rem]"
        />
        <input
          onClick={handleSubmit}
          value={"Submit"}
          className="mt-[0.9rem] text-center hover:bg-[#e2a54f] cursor-pointer shadow-lg rounded-[5px] text-white font-bold bg-[#ff9f1c] block text-[1.2rem] w-[100%] p-[0.4rem]"
        />
      </form>
    </div>
  );
};

export default AddData;
