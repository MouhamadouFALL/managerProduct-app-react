import React, { Component } from 'react';

class Product extends Component {

    state = {
        show: false,
    }

    details = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className="col">
            <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
                <h2>{this.props.product.nom}</h2>
                <p className="card-text">{this.props.product.court_description}</p>
                {
                    this.state.show ? (
                        <p className="card-text">{this.props.product.long_description}</p>
                    ) : null
                }
                <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <button type="button" className="btn m-2 btn-sm btn-outline-secondary" onClick={this.details}>View</button>
                    <button type="button" className="btn m-2 btn-sm btn-outline-secondary" onClick={this.props.redirec.bind(this, this.props.product.id)} >Edit</button>
                    <button type="button" className="btn m-2 btn-sm btn-outline-secondary" onClick={this.props.handleDelete.bind(this, this.props.product.id)}>Delete</button>
                </div>
                <small className="text-muted">${this.props.product.price}</small>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default Product;
