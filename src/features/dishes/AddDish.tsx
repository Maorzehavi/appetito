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
        reset();
      }
    } catch (error) {
      console.error('Failed to save the dish: ', error);
    }
  }
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