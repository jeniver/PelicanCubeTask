import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ProductList from './component/ProductList'
import Header from './component/Header'
import AddProduct from './component/AddProduct'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducer'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
    <div className="container">
     <Header/>
     <ProductList/>
     <AddProduct/>
    </div>
    </Provider>
  );
}

export default App;
