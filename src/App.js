import React, { Component } from 'react';
import './App.css';
import CharityHeader from './components/charityHeader';
import CharityList from './components/charityList';
import ProductList from './components/productList';
import Product from './components/product';
import Charity from './components/charity';
import Authentication from './components/authentication';
import {HashRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import Transaction from './components/transaction';
import CharityForm from './components/charityForm';
import TransactionList from './components/user';
import transactionList from './components/user';
import store from './stores/store'

//add routing configuration
class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                <HashRouter>
                    <div>
                        <CharityHeader />
                        <Route exact path="/" render={()=><CharityList />}/>
                        <Route path="/TransactionList" render={()=><TransactionList />}/>
                        <Route path="/charityForm" render={()=><CharityForm />}/>
                        <Route path="/charityList" render={()=><CharityList />}/>
                        <Route path="/productList" render={()=><ProductList />}/>
                        <Route path="/Product/Get/:produtName" render={()=><Product />}/>
                        <Route path="/Charity/Get/:charityName" render={()=><Charity />}/>
                        <Route path="/Transaction/Save" render={()=><Transaction />}/>
                        <Route path="/signin" render={()=><Authentication />}/>
                    </div>
                </HashRouter>
                </Provider>
            </div>
        );
    }
}

export default App;