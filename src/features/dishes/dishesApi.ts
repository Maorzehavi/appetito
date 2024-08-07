import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/api";
import { Dish } from "./dishSlice";


const fetchAllDishes = createAsyncThunk<Dish[], void>(
  "dishes/fetchAllDishes",
  async () => {
    const response = await apiClient.get("/dishes");
    return response.data;
  }
);

const fetchDishById = createAsyncThunk<Dish[], string>(
  "dishes/fetchDishById",
  async (dishId: string) => {
    const response = await apiClient.get(`/dishes/${dishId}`);
    return response.data;
  }
);

const createDish = createAsyncThunk<Dish, Dish>(
  "dishes/createDish",
  async (newDish: Dish) => {
    const response = await apiClient.post("/dishes", newDish);
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
    return response.data;
  }
);

const deleteDish = createAsyncThunk<string,string>(
  "dishes/deleteDish",
  async (dishId: string) => {
    await apiClient.delete(`/dishes/${dishId}`);
    return dishId;
  }
);

export { fetchAllDishes, fetchDishById, createDish, updateDish, deleteDish };
