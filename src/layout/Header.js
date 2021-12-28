import React, {Fragment} from 'react';

const Header = () => {
    return (
        <Fragment>
            <header>
                <div class="collapse bg-dark" id="navbarHeader">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-md-7 py-4">
                        <h4 class="text-white">About</h4>
                        <p class="text-muted">Nous sommes un PME qui vous propose des produits de qualité exceptionnelle</p>
                        </div>
                        <div class="col-sm-4 offset-md-1 py-4">
                        <h4 class="text-white">Contact</h4>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-white">Follow on Twitter</a></li>
                            <li><a href="#" class="text-white">Like on Facebook</a></li>
                            <li><a href="#" class="text-white">Email me</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="navbar navbar-dark bg-dark shadow-sm">
                    <div class="container">

                    <a href="#" class="navbar-brand d-flex align-items-center">

                    <i class="fa fa-money" aria-hidden="true"></i>
                        <strong>Boom</strong>
                    </a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
