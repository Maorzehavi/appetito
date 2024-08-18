import React from 'react'
import { useForm } from 'react-hook-form'
import { login, LoginRequest } from './authApi'
import { useAppDispatch } from '../../store/store'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { handleSubmit, reset, register } = useForm<LoginRequest>()

    const onSubmit = async (data: LoginRequest) => {
        const response = await dispatch(login(data))
        if (login.fulfilled.match(response)) {
            reset()
            navigate('/admin')
        }
        if (login.rejected.match(response)) {
        }
    }



    return (
        <div className="flex justify-center items-center min-h-screen ">
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
    >
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
                <input
                    type="text"
                    {...register('username', {
                        required: 'Email is required',
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </label>
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password:
                <input
                    type="password"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: { value: 4, message: 'Password must be at least 4 characters long' }
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
            </label>
        </div>
        <div className="flex items-center justify-between">
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Login
            </button>
        </div>
    </form>
</div>

    )
}

export default LoginForm