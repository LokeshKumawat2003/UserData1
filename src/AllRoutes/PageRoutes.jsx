import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Componets/Home';
import UserDetail from './../Componets/UserDetail';


const PageRoutes = () => {
    return (
        <div>

            <Routes>

                <Route path="/detail" element={<UserDetail />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default PageRoutes;
