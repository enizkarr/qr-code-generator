import axios from "axios";
import config from "../config/config";

const apiUrl = config.apiPath;

const listCodes = async () => {
  try {
    const response = await axios.get(`${apiUrl}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const generateCode = async (title, url) => {
  console.log(title);
  console.log(url);
  try {
    const response = await axios.post(`${apiUrl}`, { title, url });
  } catch (error) {
    console.log(error);
  }
};

const openCode = async (id) => {
  try {
    const data = await axios.get(`${apiUrl}/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const removeCode = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

const downloadCode = async (id) => {
    try {
      const data = await axios.get(`${apiUrl}/${id}`);
      return data.data;
    } catch (error) {
      console.log(error);
    }
}

export { listCodes, generateCode, openCode, removeCode, downloadCode };
