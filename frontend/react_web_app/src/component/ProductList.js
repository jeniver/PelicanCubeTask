import React, { useEffect } from "react";
import { getProduct } from '../actions/productActions';
import { connect } from 'react-redux'
import axios from 'axios'



function ProductList() {

    useEffect(() => {
       getProductlist()
    });

    const getProductlist = product => {
        axios.get('http://localhost:3000/products')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }


    return (
        <div style={{ marginBottom: 30 }}>
            <ul className="list-group">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    product: state,

});
export default connect(mapStateToProps, { getProduct })(ProductList)