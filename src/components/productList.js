import React, { Component } from 'react';
import { fetchProducts } from '../actions/productActions'
import { setProduct } from '../actions/productActions';
import {connect} from "react-redux";
import { Image } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
//import { Glyphicon } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';

//require a callback function to be sent to MovieList to update the header subtitle

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchProducts());
    }

    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setProduct(this.props.products[selectedIndex]));
    }

    handleClick = (product) => {
        const {dispatch} = this.props;
        dispatch(setProduct(product));
    }

    render() {

        const ProductListCarousel= ({productList}) => {
            if (!productList) { // evaluates to true if currentMovie is null
                return <div>Loading...</div>;
            }

            return (
                <Carousel onSelect={this.handleSelect}>
                    {productList.map((product) =>
                        <Carousel.Item key={product._id}>
                            <div>
                                <LinkContainer to={'/Product/Get/'+product.Name} onClick={()=>this.handleClick(product)}>
                                    <Image className="image" src={product.imageUrl} thumbnail />
                                </LinkContainer>
                            </div>
                            <Carousel.Caption>
                                <h3>{product.Name}</h3>

                            </Carousel.Caption>
                        </Carousel.Item>)}
                </Carousel>);
        }

        return (
            <ProductListCarousel productList={this.props.products} />
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.product.products
    }
}

export default connect(mapStateToProps)(ProductList);