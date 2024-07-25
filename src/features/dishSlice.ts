import { createSlice } from "@reduxjs/toolkit";
import { createDish, deleteDish, fetchAllDishes, fetchDishById, updateDish } from "./dishesApi";

interface Dish {
    id?: string;
    name: string;
    price: number;
    description: string;
    image: string;
  }

interface DishState {
  dishes: Dish[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DishState = {
  dishes: [],
  status: "idle",
  error: null,
};

const dishSlice = createSlice({
    name: "dishes",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchAllDishes.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.dishes = action.payload;
        });
        builder.addCase(fetchAllDishes.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchAllDishes.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message as string;
        });
        builder.addCase(fetchDishById.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.dishes = action.payload;
        });
        builder.addCase(fetchDishById.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchDishById.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message as string;
        });
        builder.addCase(createDish.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.dishes.push(action.payload);
        });
        builder.addCase(createDish.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(createDish.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message as string;
        });
        builder.addCase(updateDish.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.dishes = state.dishes.map((dish) =>
                dish.id === action.payload.id ? action.payload : dish
            );
        });
        builder.addCase(updateDish.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(updateDish.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message as string;
        });
        builder.addCase(deleteDish.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.dishes = state.dishes.filter((dish) => dish.id !== action.payload);
        });
        builder.addCase(deleteDish.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(deleteDish.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message as string;
        });

    }
});

export default dishSlice.reducer;
export type { Dish };



