import React, { Component } from 'react';

import axios from 'axios';

class AddProduct extends Component {

    constructor() {
        super();
        this.state = {nom: "", price: "", court_description: "", long_description: ""}
    }

    // Écouter les événement
    //handleChange = even => this.setState({ [even.target.name]: even.target.value});
    handleChangeNom = e => this.setState({ nom: e.target.value});
    handleChangePrice = e => this.setState({ price: e.target.value});
    handleChangeCourtDesc = e => this.setState({ court_description: e.target.value});
    handleChangeLongDesc = e => this.setState({ long_description: e.target.value});

    // Ajouter le input du formulaire dans le state
    handleAdd = e => {
        e.preventDefault();

        const product= {
            nom: this.state.nom,
            price: this.state.price,
            court_description: this.state.court_description,
            long_description: this.state.long_description
        }

        axios.post('http://localhost:3005/products/', {product})
        .then( res => {
            this.setState({
                nom: "", 
                price: "", 
                court_description: "", 
                long_description: ""
            });
        })

        /*
        this.props.handleAdd(
            this.state.nom, 
            this.state.price, 
            this.state.court_description, 
            this.state.long_description
        );*/
        
    }

    render() {
        return (
            <div className="container" handleAdd={this}>
                
                <form className="row g-3" onSubmit={this.handleAdd}>
                    
                    <div className="mb-3">
                        <label htmlFor="Nom Produit" className="form-label">Nom Produit</label>
                        <input type="text" name='nom' value={this.state.nom} onChange={this.handleChangeNom} className="form-control" placeholder="Entrer le nom du produit" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Prix Produit" className="form-label">Price Produit</label>
                        <input type="text" name='price' value={this.state.price} onChange={this.handleChangePrice} className="form-control" placeholder="Entrer le prix du produit" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Description courte" className="form-label">Courte Description</label>
                        <input type="text" name='court_des' value={this.state.court_description} onChange={this.handleChangeCourtDesc} className="form-control" placeholder="Entrer une courte description du produit" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Description longue" className="form-label">Description du Produit</label>
                        <textarea name="long_des" value={this.state.long_description} onChange={this.handleChangeLongDesc} className="form-control" rows="2" placeholder='ici les details du produit' ></textarea>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default AddProduct;
