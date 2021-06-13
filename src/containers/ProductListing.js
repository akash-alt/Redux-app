import React,{useEffect} from 'react'
import axios from "axios"
import {useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productAction';
import ProductComponent from './ProductComponent';

const ProductListing =()=>{
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()

    const fetchProducts = async()=>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch(setProducts(response.data))
    };
    useEffect(()=>{
        fetchProducts();
    },[])
    console.log("Products: ",products)
    return(
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}
export default ProductListing;


// --- note ----//
// here i am going to use productselectore as listing of product
// will also import by using of {useSelector} method
//here we used {useSelector} for the selecting product

//here we changing productlist to productcomponent 
// here we access product as a (state)
// step 7th

// now i am going to use axios for the fetching data from API
// we used (useEffect) for the fetching data for the product
// here getting response in the form of data then we used (response.data)
// here we pass (setproducts) from (productAction )
// we are updating l.n-22 for geting data from server