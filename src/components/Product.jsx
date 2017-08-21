import React, {Component} from 'react';
import PropTypes from 'prop-types';
import img from '../assets/images/avatars/daniel.jpg';

class Product extends Component {

    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src='../assets/images/products.image-aqua.png'/>
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <a>Fort Knight</a>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img className='ui avatar image' src= "./assets/images/avatars/daniel.jpg"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;