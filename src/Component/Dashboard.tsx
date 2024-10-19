import React from 'react';
import { useParams } from 'react-router-dom';
import logo from '../logo.jpg'; 

const Welcome: React.FC = () => {
    const { name } = useParams<{ name: string }>();

    return (
        <div>
            <center>
                <h1 style={{ color: "blue", fontSize: 50 }}>Welcome {name}!</h1>
            </center>
            <img src={logo} alt="Logo" />
        </div>
    );
};

export default Welcome;


