import React from 'react'
import { useForm } from 'react-hook-form'
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
        const createdDish = resultAction.payload;

        if (createdDish.id) { // Ensure createdDish.id is defined
          console.log('Dish ID:', createdDish.id);
          console.log('Image:', data.image[0]);

          // Creating FormData for image upload
          const formData = new FormData();
          formData.append('image', data.image[0] as File); // Append the image file
          formData.append('dishId', createdDish.id.toString()); // Append the dishId

          // Upload the image
          const imageResponse = await apiClient.post('/images', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          console.log('Image uploaded:', imageResponse.data);
          reset();
        } else {
          console.error('Created dish ID is undefined');
        }
      }
    } catch (error) {
      console.error('Failed to create dish or upload image:', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            type="text"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 3, message: 'Name must be at least 3 characters long' }
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>

        <label>
          Description:
          <input
            type="text"
            {...register('description', {
              required: 'Description is required',
              minLength: { value: 5, message: 'Description must be at least 5 characters long' }
            })}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </label>
        <label>
          Image file:
          <input
            type="file"
            {...register('image', {
              required: 'Image is required'
            })}
          />

        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddDish