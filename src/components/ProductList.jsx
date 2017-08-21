import React,{ Component } from 'react'
import Example from '../components/Example'
import '../assets/css/Hello.css'
import styled from 'styled-components'
import Product from './Product'

const Heading = styled.h1`
    text-align: center;
    color: blue;
    margin:0;
`;

class ProductList extends Component{
    render(){
        return(
            <div>
            <div className="main ui text container">
                <Heading>Popular Products</Heading>
                 <div id="orderButton"></div>
                 <hr />     
                 <Product />
            </div>
           </div>
        );
    }
}

export default ProductList