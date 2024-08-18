import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchAllDishes } from './dishesApi';
import AdminDishCard from './AdminDishCard';

function AdminDishList() {

    const appDispatch = useAppDispatch();
    const appSelector = useAppSelector;

    useEffect(() => {
        appDispatch(fetchAllDishes());
    }, [appDispatch]);

    const dishes = appSelector((state) => state.dishes.dishes);


    return (
        <div>
            <div className="flex flex-wrap justify-center gap-5">
                {dishes.map((dish) => (
                    <AdminDishCard key={dish.id} dish={dish} />
                ))}
            </div>
        </div>

    )
}

export default AdminDishList