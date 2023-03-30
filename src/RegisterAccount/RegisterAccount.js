import React from "react";
import { useState } from 'react';
import "./RegisterAccount.css";
import axios from 'axios';

const initFormValue = {
    email: "",
    userName: "",
    fullName: "",
    password: "",
    phoneNumber: "",
    address: "",
}

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
}

const isEmailValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export default function RegisterPage() {
    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({});

    const validateForm = () => {
        const error = {};
        if (isEmptyValue(formValue.email)) {
            error['email'] = 'Email is required!';
        } else {
            if (!isEmailValid(formValue.email)) {
                error['email'] = "Email is invalid!";
            }
        }
        if (isEmptyValue(formValue.userName)) {
            error['userName'] = 'User name is required!';
        }
        if (isEmptyValue(formValue.fullName)) {
            error['fullName'] = 'Full name is required!';
        }
        if (isEmptyValue(formValue.password)) {
            error['password'] = 'Password is required!';
        }
        if (isEmptyValue(formValue.phoneNumber)) {
            error['phoneNumber'] = 'Phone number is required!';
        }
        if (isEmptyValue(formValue.address)) {
            error['address'] = 'Address is required!';
        }
        setFormError(error);
        return Object.keys(error).length === 0;
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (validateForm()) {
    //         console.log("Form value", formValue);
    //     } else {
    //         console.log("Form invalid!")
    //     }
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('https://edison-shipping-api.savvycom.xyz/api', formValue, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log("Server response", response.data);
            } catch (error) {
                console.error("Error sending form data to server", error);
            }
        } else {
            console.log("Form invalid!")
        }
    }
    
    console.log(formError)

    return <div className="register-page">
        <div className="register-form-container">

            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label">
                        Your email
                    </label>
                    <input
                        id="email"
                        className="form-control"
                        type="text"
                        name="email"
                        value={formValue.email}
                        onChange={handleChange}
                    />
                    {formError.email && (
                        <div className="error-feedback">{formError.email}</div>
                    )}
                </div>

                <div className="mb-2">
                    <label htmlFor="user-name" className="form-label">
                        Username
                    </label>
                    <input
                        id="user-name"
                        className="form-control"
                        type="text"
                        name="userName"
                        value={formValue.userName}
                        onChange={handleChange}
                    />
                    {formError.userName && (
                        <div className="error-feedback">{formError.userName}</div>
                    )}
                </div>

                <div className="mb-2">
                    <label htmlFor="full-name" className="form-label">
                        Full name
                    </label>
                    <input
                        id="full-name"
                        className="form-control"
                        type="text"
                        name="fullName"
                        value={formValue.fullName}
                        onChange={handleChange}
                    />
                    {formError.fullName && (
                            <div className="error-feedback">{formError.fullName}</div>
                        )}
                </div>

                <div className="mb-2">
                    <label htmlFor="mb-2" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        className="form-control"
                        type="password"
                        name="password"
                        value={formValue.password}
                        onChange={handleChange}
                    />
                    {formError.password && (
                            <div className="error-feedback">{formError.password}</div>
                        )}
                </div>

                <div className="mb-2">
                    <label htmlFor="mb-2" className="form-label">
                        Phone Number
                    </label>
                    <input
                        id="phoneNumber"
                        className="form-control"
                        type="number"
                        name="phoneNumber"
                        value={formValue.phoneNumber}
                        onChange={handleChange}
                    />
                    {formError.phoneNumber && (
                            <div className="error-feedback">{formError.phoneNumber}</div>
                        )}
                </div>

                <div className="mb-2">
                    <label htmlFor="Address" className="form-label">
                        Address
                    </label>
                    <input
                        id="address"
                        className="form-control"
                        type="text"
                        name="address"
                        value={formValue.address}
                        onChange={handleChange}
                    />
                    {formError.address && (
                            <div className="error-feedback">{formError.address}</div>
                        )}
                </div>
                <button type="submit" className="submit-btn">
                    CREATE ACCOUNT
                </button>
                <div className="mb-2">
                    <a className="link-form-login">or log in to your account</a>
                </div>
            </form>
        </div>
    </div>

}
