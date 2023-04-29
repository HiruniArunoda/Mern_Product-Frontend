import axios from "axios";

const HOST = "http://localhost:8000/api";

export const createProduct = async (Payload) => {
  try {
    await axios.post(`${HOST}/save`, Payload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      err: error.response.data.status,
    };
  }
};

export const getAllProduct = async () => {
  try {
    const response = await axios.get(`${HOST}/get`);
    return {
      ok: true,
      data: response.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

export const updateProduct = async (id, Payload) => {
  try {
    await axios.put(`${HOST}/update/${id}`, Payload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      err: error.response.data.status,
    };
  }
};

export const deleteProduct = async (id) => {
  try {
    await axios.post(`${HOST}/delete/${id}`);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      err: error.response.data.status,
    };
  }
};
