import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import App from './App';
import Layout from "./components/Layout";
import Home from './components/Home';
import ErrorPage from "./components/ErrorPage";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

const router = (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<App />} errorElement={<ErrorPage />}>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    {/*<Route path="/login" element={<Login />} />*/}
                    {/* Catch-all route for unmatched routes */}
                    <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for unmatched routes */}
                </Route>
            </Routes>
        </Layout>
    </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {router}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
