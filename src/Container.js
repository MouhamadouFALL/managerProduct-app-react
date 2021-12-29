import React, { Component } from 'react';

import Productlist from './ProductList';

class Container extends Component {
    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    <Productlist />
                </div>
                </div>
            </div>
        );
    }
}

export default Container;
