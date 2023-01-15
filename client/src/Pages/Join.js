import React from 'react'
import LoginForm from '../Components/Login'
import Register from '../Components/Register'
function Join() {
    return (
        <div class="main">
            <div class="form-group">
                <h1>Join activity</h1>
                <LoginForm />
                <h1>Create an activity</h1>
                <Register />
            </div>
        </div>
    )
}

export default Join