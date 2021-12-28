import React, { Component } from 'react';

import AddProduct from './AddProduct';

class Productlist extends Component {

    state = {isLoading: true, products : [], error: null }

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
     handleAdd = ({nom, price, court_description, long_description}) => {
        axios.post('http://localhost:3005/products/', {nom, price, court_description, long_description})
        .then( res => {
            this.setState({
                products: [...this.state.products, res.data]
            });
        })
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

        const products = this.state.products;
        const isLoading = this.state.isLoading;

        return (
            <div>
                {
                    <AddProduct handleAdd = {this.handleAdd} />
                    
                }
            </div>
        );
    }
}

export default Productlist;
