import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const ProductComponent =()=>{
    const products = useSelector((state)=>state.allProducts.products )
    const renderList = products.map((product)=>{
        const{id,title,image,price,category} = product;
        
        return(
        <div className="four wide column" key={id}>
            <Link to={`/product/ ${id}`}>
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src={image} alt={title} />
                </div>
                    <div className="content">
                       <div className="header">{title}</div> 
                       <div className="meta price">$ {price}</div>
                       <div className="meta">{category}</div>
                    </div>
            </div>
        </div>
            </Link>
    </div>
    )
    })

    
return<>{renderList }</>
    
};
export default ProductComponent;


// --------- Note -----------//

// here we add inside the state is --> allproducts
// here we gave products[0] values for the access the products
// now this product is array of list
// we will use (map) for Display the product
//// const{id,title} = products[0];
//*** */ for the return i add (renderList)
// here we are using <link> which coming from (react-dom)

// we have to show single page with description with the help of API
// now will go to {productDetails} page
//