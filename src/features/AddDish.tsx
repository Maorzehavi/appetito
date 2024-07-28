import React from 'react'
import { useForm } from 'react-hook-form'
import { Dish } from './dishSlice'
import { useAppDispatch } from '../store/store';
import { createDish } from './dishesApi';

function AddDish() {
  const { handleSubmit, reset, register, formState: { errors, isValid } } = useForm<Dish>({
    mode: 'onChange'
  });
  const appDispatch = useAppDispatch();

  const onSubmit = (data: Dish) => {
    if (isValid) {
      console.log(data)
      data.price = parseInt(data.price.toString())
      appDispatch(createDish(data))
      reset()
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
          Price:
          <input
            type="number"
            {...register('price', {
              required: 'Price is required',
              min: { value: 1, message: 'Price must be at least 1' }
            })}
          />
          {errors.price && <p>{errors.price.message}</p>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddDish