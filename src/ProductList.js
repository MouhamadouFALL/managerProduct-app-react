import React, { Component } from 'react';

import Product from './Product';

import axios from 'axios';
import { Fragment } from 'react';

import EditProduct from "./pages/EditProduct";

class Productlist extends Component {

    constructor() {
        super();
        this.state = { isLoading: true, products : [], error: null, montre: true, productUpdate: {} }

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

    redirec = (productId) => {

        axios.get('http://localhost:3005/products/' + productId)
        .then( res => {
            const productToUpdate = res.data;
            this.setState({ productUpdate: productToUpdate});
        })

        //const productToUpdate = th

        this.setState({
            montre: !this.state.montre
        })
        
    }
    

    render() {

        const products = this.state.products
        const isLoading = this.state.isLoading;

        return (
            <Fragment>
                {
                    this.state.montre ? (
                    (!products.length)? <p>Aucun produit</p> :
                    (isLoading)? <p> isLoading ...</p> :
                    products.map( product => <Product 
                            key={product.id}
                            product={product}
                            handleDelete={this.handleDelete}
                            redirec={this.redirec}
                    />)

                    ) : (
                        <EditProduct productUpdate={this.state.productUpdate} />
                    )
                }
            </Fragment>
        )
    }
}

export default Productlist;
