import axios from 'axios'


export const getProduct = () => {
   
    return (dispatch) =>{
        axios.get('http://localhost:3000/products')
        .then(res => {
            console.log(res)
            dispatch({
                type:'LIST_PRODUCTS',
                payload:res.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}


export const addProduct = (prodObj) => {
    return (dispatch) =>{
        axios.post('http://localhost:3000/products' , {prodObj})
        .then(res => {
            console.log(res)
            dispatch({
                type:'ADD_PRODUCTS',
                payload:res.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}

