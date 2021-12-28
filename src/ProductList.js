import React, { Component } from 'react';

class Productlist extends Component {

    state = {isLoading: true, students : [], error: null }

    // Récupérer tous les produits dans la base products
    componentDidMount() {
        axios.get('http://localhost:3003/learners')
        .then( res => {
            const students = res.data;
            this.setState({ students, isLoading: false });
        })
        .catch( error => this.setState({ error, isLoading: false}))
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Productlist;
