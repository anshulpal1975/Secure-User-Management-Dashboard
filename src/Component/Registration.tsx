import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../store/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import '../Styles/Style.css';


const initialState = {
    name: '',
    email: '',
    password: '',
};

const Registration: React.FC = () => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({ name: '', email: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = { name: '', email: '', password: '' };

        if (!formData.name) {
            newErrors.name = 'Please enter your name';
            isValid = false;
        }

        const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email) {
            newErrors.email = 'Please enter your email';
            isValid = false;
        } else if (!emailRegExp.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Please enter your password';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(register(formData));
            console.log('Registration successful:', formData);
            navigate(`/`);
        }
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h1 className="registration-title">Register</h1>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className={`form-input ${errors.password ? 'input-error' : ''}`}
                    />
                    {errors.password && <div className="error-message">{errors.password}</div>}
                </div>

                <button type="submit" className="submit-button">Register</button>

                <p className="redirect-text">
                    Already have an account? <Link to="/">Sign In</Link>
                </p>
            </form>
        </div>
    );
};

export default Registration;
