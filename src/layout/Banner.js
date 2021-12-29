import React from 'react';

const Banner = () => {
    return (
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="header">Welcome to Boom </h1>
                    <h3 className="fw-light">Liste des produits disponibles</h3>
                    <p className="lead text-muted">Boom vous presentons des produits de qualite superieure</p>
                    <p><a href="/addproduct" className="btn btn-primary my-2">Add Product</a></p>
                </div>
            </div>
        </section>
    );
}

export default Banner;
