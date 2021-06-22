import axios from "axios";

export const FETCH_PRODUCT_START = 'FETCH_PRODUCT_START';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAIL = 'FETCH_PRODUCT_FAIL';

export const fetchProduct = () => (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_START});
    axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow")
    .then(res =>
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: res.data.results }))
        .catch(err => dispatch ({ type: FETCH_PRODUCT_FAIL, payload: err }))
};