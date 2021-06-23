import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/makeupActions';

const Product = (props) => {
    useEffect(() => {
        props.fetchProduct();
    }, [props.fetchProduct]);

    if (props.loading) {
        return (
            <>
            <p>Fetching your color palettes</p>
            </>
        )
    }
    return (
        <>
        <h2>{props.name}</h2>
        <h3>{props.brand}</h3>
        <img src={props.image} alt="eyeshadow"/>
        <button OnClick={() => props.fetchProduct()}>Fetch Makeup</button>
        </> 
    )
}

const mapStateToProps = (state) => {
    return{
        name: state.name,
        brand: state.brand,
        image: state.image,
        loading: state.loading
    }
}
const mapDispatchToProps = {fetchProduct}

export default connect(mapStateToProps, mapDispatchToProps) (Product);
