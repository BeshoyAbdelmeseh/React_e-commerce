import React, {PureComponent} from "react";
import { NavLink, Link } from "react-router-dom";
import { NavbarStyle } from "../styledComponents/navbar.styled";
import bagPic from "../imgs/bag-pic.png";
import cartPic from "../imgs/cart-pic.png";
import cartCircle from "../imgs/cart-circle.png";
import { client } from '@tilework/opus';
import {setCurrency} from "../redux/actions/products.actions";
import NavbarCart from "./navbarCart";
import { connect } from "react-redux";
import { getCurrenciesQuery } from '../queries/productQueries';

class navbar extends PureComponent{

    state = {
        currencies:[]
    }

    componentDidMount(){
        client.post(getCurrenciesQuery)
        .then(result => this.setState({
            currencies: result.currencies
        }))
        .catch()
    }

    changeCurrency(newCurrency){
        this.props.setCurrency(newCurrency);
    }

    render(){
        const {cartProducts, currencySymbol} = this.props;
        
        return(
            <NavbarStyle>
                <div id="main-div">
                    <ul>
                        <li><NavLink to="/all" exact className="main-a">All</NavLink></li>
                        <li><NavLink to="/tech" className="main-a">Tech</NavLink></li>
                        <li><NavLink to="/clothes" className="main-a">Clothes</NavLink></li>
                    </ul>
                    <Link to="/all"><img src={bagPic} alt="bagPic"/></Link>
                    <ul>
                        <li>
                            <div className="currency-dropdown">
                                <button className="currency-dropbtn">{currencySymbol}</button>
                                <div className="currency-dropdown-content">
                                    {this.state.currencies.map(currency => {
                                        return(
                                            <a href={`#${currency.label}`} key={currency.label} onClick={() => this.changeCurrency(currency)}>{currency.symbol} {currency.label}</a>
                                        )
                                    })}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cart-dropdown">
                                <button className="cart-dropbtn"><img src={cartPic} alt="cartPic"/></button>
                                {cartProducts.length > 0 ? <div id="cartCounter"><img src={cartCircle} alt="circle"/><span>{cartProducts.length}</span></div> : null}
                                <div className="cart-dropdown-content">
                                    <NavbarCart />
                                </div>
                            </div>
                            <div id="overlay"></div>
                        </li>
                    </ul>
                </div>
            </NavbarStyle>
        )
    }
}

function mapStateToProps(state){
    return({
        currencySymbol: state.productsReducer.currency.symbol,
        cartProducts: state.cartReducer
    })
}

function mapDispatchToProps(dispatch){
    return({
        setCurrency: (currency) => dispatch(setCurrency(currency))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar);