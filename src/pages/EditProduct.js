import React, { Component } from 'react';

import axios from 'axios';

class EditProduct extends Component {

    constructor() {
        super();
        this.state = {nom: "", price: "", lien: "", court_description: "", long_description: ""};

        this.initialize();

        this.handleChange = this.handleChange.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    initialize = () => {
        const nom = this.props.productUp.nom;
        this.setState({nom: nom});
    }
    
    // Écouter les événement
    handleChange = e => this.setState({ [e.target.name]: e.target.value});

    updateProduct = e => {
        e.preventDefault();

        const nom = this.state.nom;
        const price = this.state.price;
        const lien = this.state.lien;
        const court_description = this.state.court_description;
        const long_description = this.state.long_description;

        axios.put('http://localhost:3005/products/' + this.props.productUp.id , {nom, price, lien, court_description, long_description})


        //this.history.push("/");
    }

    render() {
        
        return (
            <div className="container" >
                
                <form className="row g-3" onSubmit={this.updateProduct}>
                    
                    <div className="mb-3">
                        <label htmlFor="Nom Produit" className="form-label">Nom Produit</label>
                        <input type="text" name='nom' value={this.state.nom} onChange={this.handleChange} className="form-control" placeholder="Entrer le nom du produit" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Prix Produit" className="form-label">Price Produit</label>
                        <input type="text" name='price' value={this.props.productUp.price} onChange={this.handleChange} className="form-control" placeholder="Entrer le prix du produit" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Nom Produit" className="form-label">Lien D'image du produit</label>
                        <input type="text" name='nom' value={this.state.lien} onChange={this.handleChange} className="form-control" placeholder="Entrer le lien d'image du produit" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Description courte" className="form-label">Courte Description</label>
                        <input type="text" name='court_description' value={this.state.court_description} onChange={this.handleChange} className="form-control" placeholder="Entrer une courte description du produit" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Description longue" className="form-label">Description du Produit</label>
                        <textarea name="long_description" value={this.state.long_description} onChange={this.handleChange} className="form-control" rows="2" placeholder='ici les details du produit' ></textarea>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={this.props.show}>Update</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default EditProduct;
