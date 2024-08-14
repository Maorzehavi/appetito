import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/api";
import { Dish } from "./dishSlice";
import appConfig from "../../utils/config";
import { refreshToken } from "../auth/authApi";




const fetchAllDishes = createAsyncThunk<Dish[], void>(
  "dishes/fetchAllDishes",
  async () => {
    const response = await apiClient.get("/dishes");
    response.data.forEach((dish: Dish) => {
      dish.image = `${appConfig.productsImagesUrl}${dish.id}`;
    });
    return response.data;
  }
);

const fetchDishById = createAsyncThunk<Dish[], string>(
  "dishes/fetchDishById",
  async (dishId: string) => {
    const response = await apiClient.get(`/dishes/${dishId}`);
    response.data.image = `${appConfig.productsImagesUrl}${dishId}`;
    return response.data;
  }
);

const createDish = createAsyncThunk<Dish, Dish>(
  "dishes/createDish",
  async (newDish: Dish) => {
    const response = await apiClient.post("/dishes", newDish);
    // if error make refresh token
    if (response.status === 401 || response.status === 403) {
      refreshToken();
    }
    const formData = new FormData();
    formData.append("image", newDish.image[0] as File);
    formData.append("dishId", response.data.id);
    await apiClient.post("/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    response.data.image = `${appConfig.productsImagesUrl}${response.data.id}`;
    return response.data;
  }
);

const updateDish = createAsyncThunk<Dish, Dish>(
  "dishes/updateDish",
  async (updatedDish: Dish) => {
    const response = await apiClient.put(
      `/dishes/${updatedDish.id}`,
      updatedDish
    );
    response.data.image = `${appConfig.productsImagesUrl}${response.data.id}`;
    return response.data;
  }
);

const deleteDish = createAsyncThunk<string, string>(
  "dishes/deleteDish",
  async (dishId: string) => {
    const deleted = await apiClient.delete(`/dishes/${dishId}`);
    if (deleted.status === 204) {
      await apiClient.delete(`/images/${dishId}`);
    }

    return dishId;
  }
);

export { fetchAllDishes, fetchDishById, createDish, updateDish, deleteDish };
