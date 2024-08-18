import React, { useState } from 'react'

import Logout from '../features/auth/Logout'
import AddDish from '../features/dishes/AddDish'
import AdminDishList from '../features/dishes/AdminDishList';


function Admin() {

  const [showAddDish, setShowAddDish] = useState(false);

  const handleAddDish = () => {
    setShowAddDish(showAddDish => !showAddDish);
  };

  return (
    <div className="h-full ">
      <div className="flex justify-center items-center  gap-10">
      <Logout />
      <button
        onClick={handleAddDish}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        הוסף מנה
      </button>
      </div>

      {/* Conditionally render AddDish component */}
      {showAddDish && <AddDish />}
      <AdminDishList/>
    </div>
  );
}

export default Admin