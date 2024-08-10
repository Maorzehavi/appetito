import React, { useEffect } from 'react'
import { Dish } from './dishSlice';
import appConfig from '../../utils/config';
import { useAppDispatch } from '../../store/store';
import { deleteDish } from './dishesApi';


interface DishCardProps {
    dish: Dish;
}
function DishCard(props: DishCardProps) {
    const dispatch = useAppDispatch();
    const handleOnClick = () => {
        dispatch(deleteDish(props.dish.id as string));
    }




    return (
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 shadow-md">
            <img className="sm:h-48 md:h-56 lg:h-64 xl:h-72 w-full object-cover rounded-lg" src={props.dish.image as string} alt={props.dish.name} />
            <div className="sm:h-24 md:h-32 lg:h-40 xl:h-48 p-4">
                <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">{props.dish.name}</div>
                <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600">{props.dish.description}</p>
            </div>
                <button onClick={handleOnClick}>מחק</button>
            <div className="sm:h-12 md:h-16 lg:h-20 xl:h-24 p-4 flex justify-between items-center">
            </div>
        </div>
    )
}

export default DishCard