import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import cookie from "cookie";
import Login from './containers/Login';
import BizDetails from './containers/BizDetails'; 
import Listings from './containers/Listings';
import AdminView from './containers/AdminView';
import AddListings from './containers/AddListings';
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies['loggedIn'] ? true : false;
};
const ProtectedRoute = ({ component: Component, ...rest}) => {
    return checkAuth() ? <Component{...rest}/> : <Navigate to="/login"/>;
};
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute component={AdminView} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:id" element={<BizDetails />} />
            <Route path="/listings" element={<Listings/>} />
            <Route path="/AddListings" element = {<ProtectedRoute component={AddListings} />} />

        </Routes>
    );
};

export default Router;