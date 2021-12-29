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

    // Ajouter un produit dans la base products
    /*handleAdd = product => {
        axios.post('http://localhost:3005/products/', {product})
        .then( res => {
            this.setState({
                products: [...this.state.products, res.data]
            });
        })
    }*/

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
                            key={products.id}
                            product={product}
                            handleDelete={this.handleDelete}
                    />)
                }
            </Fragment>
        )
    }
}

export default Productlist;
