import {combineReducers, configureStore} from "@reduxjs/toolkit";

import product from "./silces/product";


const reducer = combineReducers({
    product,
});



export default configureStore({ reducer });
