import React from 'react';
import { useForm } from 'react-hook-form';
import { AppDispatch, useAppDispatch } from '../../store/store';
import { createDish } from './dishesApi';
import { Dish } from './dishSlice';
import apiClient from '../../utils/api';

function AddDish() {
  const { handleSubmit, reset, register, formState: { errors, isValid } } = useForm<Dish>({
    mode: 'onChange'
  });
  const appDispatch = useAppDispatch();

  const onSubmit = async (data: Dish) => {
    try {
      const resultAction = await appDispatch(createDish(data));
      if (createDish.fulfilled.match(resultAction)) {
        reset();
      }
    } catch (error) {
      console.error('Failed to save the dish: ', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
            שם מנה
            <input
              type="text"
              {...register('name', {
                required: 'שם המנה הוא שדה חובה',
                minLength: { value: 3, message: 'שם המנה צריך להיות לפחות 3 אותיות' }
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-right leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
            תיאור
            <input
              type="text"
              {...register('description', {
                required: 'תיאור המנה הוא שדה חובה',
                minLength: { value: 5, message: 'תיאור המנה צריך להיות לפחות 5 אותיות' }
              })}
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-right leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
            תמונה
            <input
              type="file"
              accept='image/*'
              {...register('image', {
                required: 'תמונה היא שדה חובה'
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.image && <p className="text-red-500 text-xs italic">{errors.image.message}</p>}
          </label>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDish;
