import React from 'react';
import '../css/pages.css';
import {useForm} from "../utils/useForm";

export default function UseFormDemo() {
    const {values, handleChange, handleSubmit} = useForm(login);

    function login() {
        console.log(values);
    }

    return (
        <div className="page">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email Address</label>
                    <input type="email" name="email" onChange={handleChange} value={values.email}
                           required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange}
                           value={values.password} required/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>

    );
}