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
                
            <img src='https://cdn.pixabay.com/photo/2020/05/09/11/37/coffee-5149246_960_720.jpg'  width="100%" height="100%" className='img' />
            

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
