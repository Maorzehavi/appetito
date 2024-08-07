import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/api";
import { Image } from "./imageSlice";

const fetchAllImages = createAsyncThunk<Image[], void>(
  "images/fetchAllImages",
  async () => {
    const response = await apiClient.get("images");
    for (const image of response.data) {

      image.url = `${apiClient.defaults.baseURL}images/${image.id}`;
    }
    return response.data;
  }
);

const fetchImageById = createAsyncThunk<Image, string>(
  "images/fetchImageById",
  async (imageId: string) => {
    const response = await apiClient.get(`images/${imageId}`);
// response.data.
    // response.data.url = `${apiClient.defaults.baseURL}images/${response.data.id}`;
    // console.log(response);
    return response.data;
  }
);

const createImage = createAsyncThunk<Image, Image>(
  "images/createImage",
  async (newImage: Image) => {
    const formData = new FormData();
    formData.append('image', newImage.file as File);
    formData.append('dishId', newImage.dishId);
    const response = await apiClient.post("images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    response.data.url = `${apiClient.defaults.baseURL}images/${response.data.id}`;
    return response.data;
  }
);

export { fetchAllImages, fetchImageById, createImage };

