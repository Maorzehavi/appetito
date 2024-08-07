import { createSlice } from "@reduxjs/toolkit";
import { createImage, fetchAllImages, fetchImageById } from "./imageApi";
import { log } from "console";

type Image = {
    dishId: string;
    file: FileList | File;
    url?: string;
}

interface ImageState {
    images: Image[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: ImageState = {
    images: [],
    status: "idle",
    error: null,
};

const imageSlice = createSlice({
    name: "images",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllImages.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.images = action.payload;
        });
        builder.addCase(fetchAllImages.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchAllImages.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message as string;
        });
        builder.addCase(createImage.fulfilled, (state, action) => {
            state.status = "succeeded";
            const image = action.payload;
            console.log(image);
            state.images.push(action.payload);
        });
        builder.addCase(createImage.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(createImage.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message as string;
        });
        builder.addCase(fetchImageById.fulfilled, (state, action) => {
            state.status = "succeeded";
            const image = action.payload;
            console.log(image);
            console.log(typeof image);
            state.images.push(action.payload);
        });
        builder.addCase(fetchImageById.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchImageById.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message as string;
        });
    },
});

export default imageSlice.reducer;
export type { Image };