import api from "../utils/http";
import { AdminRoutes } from "../config/api";

export const addData = async (data) => {
  try {
    api.setCustomHeader({ "Content-Type": "multipart/form-data" });
    const res = await api.post(AdminRoutes.addData, data);
    return res;
  } catch (err) {
    return err;
  }
};
export const updateData = async (data) => {
  try {
    api.setCustomHeader({ "Content-Type": "multipart/form-data" });
    const res = await api.patch(AdminRoutes.updateData, data);
    return res;
  } catch (err) {
    return err;
  }
};

export const getData = async () => {
  try {
    const res = await api.get(AdminRoutes.getData);
    if (res.status === 200) {
      return res.data;
    }
    return res;
  } catch (err) {
    return err;
  }
};

export const deleteData = async ({adminID,card1ID,card2ID,card3ID}) => {
    try {
      const res = await api.delete(`${AdminRoutes.deleteData}/?id0=${adminID}&id1=${card1ID}&id2=${card2ID}&id3=${card3ID}`);
      if (res.status === 200) {
        return res.data;
      }
      return res;
    } catch (err) {
      return err;
    }
  };
  