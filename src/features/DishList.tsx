import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store';
import DishCard from './DishCard';
import { fetchAllDishes } from './dishesApi';
import AddDish from './AddDish';

function DishList() {

    const appDispatch = useAppDispatch();
    const appSelector = useAppSelector;

    useEffect(() => {
        appDispatch(fetchAllDishes());
    }, [appDispatch]);

    const dishes = appSelector((state) => state.dishes.dishes);


    return (
        <div>
            <AddDish />
            <div className="flex flex-wrap justify-center">
                {dishes.map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
            </div>
        </div>

    )
}

export default DishList