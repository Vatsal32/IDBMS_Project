import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {reducer} from "./store/reducers/UserReducers";
import {Provider} from "react-redux";

const rootReducer = combineReducers({
    user: reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
