import React from "react";

const Product = (props) => {
    return (
        <div>
           <ul >
               <li style={{display: !props.product.id && "none", border: "1px solid black", marginBottom: "5px"}}>{props.product.id}</li>
               <li style={{display: !props.product.name && "none", border: "1px solid black", marginBottom: "5px"}}>{props.product.name}</li>
               <li style={{display: !props.product.price && "none", border: "1px solid black", marginBottom: "5px"}}>${props.product.price}</li>
               <li style={{display: !props.product.description && "none", border: "1px solid black", marginBottom: "5px"}}>{props.product.description}</li>
           </ul>

        </div>
    )
}

export default Product;