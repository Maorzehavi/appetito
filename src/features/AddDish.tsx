import React from 'react'
import { useForm } from 'react-hook-form'
import { Dish } from './dishSlice'
import { useAppDispatch } from '../store/store';
import { createDish } from './dishesApi';

function AddDish() {
    const {handleSubmit,reset,register,}=useForm<Dish>()
    const appDispatch = useAppDispatch();
    const onSubmit = (data: Dish) => {
        console.log(data)
        data.price=parseInt(data.price.toString())
        appDispatch(createDish(data))
        reset()
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
            Name:
            <input type="text" {...register("name")} />
            </label>
            <label>
            Description:
            <input type="text" {...register("description")} />
            </label>
            <label>
            Price:
            <input type="number" {...register("price")} />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddDish