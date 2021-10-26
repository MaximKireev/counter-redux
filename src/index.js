import {createStore, bindActionCreators} from "redux";
import {reducer} from './components/reducers/reducer'
import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App/App";
import {Provider} from "react-redux";



const store = createStore(reducer);

    ReactDOM.render(
        <Provider store = {store}>
            <App />
        </Provider>, document.getElementById('root'))









