import React from 'react';

function Product({product, handleDelete}) {
    return (
        <div className="col">
            <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
                <h2>{product.nom}</h2>
                <p className="card-text">{product.court_description}</p>
                <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" >Edit</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleDelete.bind(this, product.id)}>Delete</button>
                </div>
                <small className="text-muted">${product.price}</small>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Product;
