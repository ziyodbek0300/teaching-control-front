import React, { useEffect, useRef } from 'react'
import http from '../../services/Axios';
import './styles.css'

function Login({ setAuth }) {
    const notFound = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = {
            "first_name": "",
            "last_name": "",
            "phone": "",
            "position": null,
            "password": e.target[1].value
        }

        http.post('users/login/', user)
            .then(res => {
                if (res.status === 204) {
                    notFound.current.classList.remove('d-none')
                    setTimeout(() => {
                        notFound.current.classList.add('d-none')
                    }, 3000)
                } else if (res.status === 200) {
                    window.localStorage.setItem('authUser', JSON.stringify(res.data.user))
                    setAuth(res.data.user)
                }
            })
    }

    return (
        <div className='vh-100 bg-dark text-warning d-flex justify-content-center align-items-center'>
            <div className="card">
                <div className="card-header">
                    <h4>Login</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div ref={notFound} className="alert alert-danger d-none">
                            User not found.!
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className='form-label'>Username</label>
                            <input required type="text" className='form-control' id='username' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className='form-label'>Password</label>
                            <input required type="password" className='form-control' id='password' />
                        </div>
                    </div>
                    <div className="card-footer text-end">
                        <button className='btn btn-dark btn-sm' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login