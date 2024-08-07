import { useAppSelector } from "../store/store";

export const useImages = () => {
  const images = useAppSelector((state) => state.images.images);
  return images;
};

export const GetImageById = (id: string) => {
    const images = useAppSelector((state) => state.images.images);
    return images.find((image) => image.dishId === id);
    }