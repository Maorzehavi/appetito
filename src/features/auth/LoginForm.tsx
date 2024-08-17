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
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Email:
                    <input
                        type="text"
                        {...register('username', {
                            required: 'Email is required',

                        })}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 4, message: 'Password must be at least 4 characters long' }
                        })}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm