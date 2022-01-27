import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NotFound} from './components/NotFound/NotFound';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<App />} />
            </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
