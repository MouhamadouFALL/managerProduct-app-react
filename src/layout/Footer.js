import React, {Fragment} from 'react';

const Footer = () => {
    return (
        <Fragment>
            <footer className="text-muted py-5">
                <div className="container">
                <p className="float-end mb-1">
                    <a href="#">Back to top</a>
                    </p>
                    <p className="mb-1">Boom &copy; votre Magawin en ligne</p>
                    <p className="mb-0">Un espace nouveau d'achat et vente.</p>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;
