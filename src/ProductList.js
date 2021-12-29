import React, { Component } from 'react';

import Product from './Product';

import axios from 'axios';
import { Fragment } from 'react';

class Productlist extends Component {

    constructor() {
        super();
        this.state = {isLoading: true, products : [], error: null }

        this.handleDelete = this.handleDelete.bind(this);
    }

    //state = {isLoading: true, products : [], error: null }

    // Récupérer tous les produits dans la base products
    componentDidMount() {
        axios.get('http://localhost:3005/products')
        .then( res => {
            const products = res.data;
            this.setState({ products, isLoading: false });
        })
        .catch( error => this.setState({ error, isLoading: false}))
    }

    // Supprimer un produit
    handleDelete(id) {
        axios.delete('http://localhost:3005/products/' + id)
        .then( res => this.setState(prevState => ({
            products: prevState.products.filter(product => product.id !== id)
        })))
        .catch(error => this.setState({error: error, isLoading: false}))
    }


    render() {

        const products = this.state.products
        const isLoading = this.state.isLoading;

        return (
            <Fragment>
                {
                    (!products.length)? <p>Aucun produit</p> :
                    (isLoading)? <p> isLoading ...</p> :
                    products.map( product => <Product 
                            key={product.id}
                            product={product}
                            handleDelete={this.handleDelete}
                    />)
                }
            </Fragment>
        )
    }
}

export default Productlist;
