import React , {useEffect} from "react";
import {getProduct} from '../actions/productActions';
import {connect } from 'react-redux'
import axios from 'axios'



function ProductList () {

    useEffect(() => {

        axios.get('http://localhost:3000/products')
            .then(function (response) {
                // handle success
                alert("h")
                console.log(response);
            })
            .catch(function (error) {
                alert("j")
                // handle error
                console.log(error);
            })
            .then(function () {
                alert("m")
                // always executed
            });
      });
 

    return (
        <div  style={{marginBottom:30}}>
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
export default connect( mapStateToProps , {getProduct}) (ProductList)