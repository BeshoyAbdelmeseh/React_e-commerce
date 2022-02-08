import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cart.actions";
import Attribute from "./attribute";
import { AttributeCartStyle } from "../styledComponents/attribute.styled";
import { CenteredItem } from "../styledComponents/centeredItem.styled";
import { CartStyle } from "../styledComponents/cart.styled";

class Cart extends Component{
    spawnCartItems = () => {
        return(
            <>
                <div id="itemsDiv">
                    {this.props.cartProducts.map(product => {
                        return(
                            <>
                                <hr/>
                                <div key={product.specialId} className="itemContainer">
                                    <div className="details">
                                        <p>{product.brand}</p>
                                        <p>{product.name}</p>
                                        <div>{this.printCurrency(product.prices)}</div>
                                        <AttributeCartStyle>
                                            <Attribute 
                                            attributeData={product.attributes}
                                            canChange={false}
                                            />
                                        </AttributeCartStyle>
                                    </div>
                                    <div className="count">
                                        <button onClick={() => this.addProdcut(product)}>+</button>
                                        {product.count}
                                        <button onClick={() => this.removeProduct(product)}>-</button>
                                    </div>
                                    <div className="pic">
                                        <img src={product.image} alt="itemImg"/>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div id="total">
                    <p>Total:</p>
                    {this.printTotalPrice()}
                </div>
            </>
        )
    }

    printTotalPrice = () =>{
        let total = 0;
        this.props.cartProducts.map(product => {
            const price = product.prices.filter(price => price.currency.label === this.props.currencyLabel)[0].amount;
            total += (product.count * price);
        })
        return(<p>{this.props.currencySymbol}{total.toFixed(2)}</p>)
    }

    addProdcut = (product) => {
        this.props.addItemToCart(product);
    }

    removeProduct = (product) => {
        this.props.removeItemFromCart(product);
    }

    printCurrency = (prices) =>{
        const price = prices.filter(price => price.currency.label === this.props.currencyLabel)[0].amount;
        return(
            <p><strong>{this.props.currencySymbol}{price}</strong></p>
        )
    }

    render(){
        return(
            <CartStyle>
                <div style={{color:"rgb(100, 100, 100)"}} id="titleDiv"><strong>CART</strong></div>
                {this.props.cartProducts.length > 0 ? this.spawnCartItems() : <CenteredItem><p>Cart is empty.</p></CenteredItem>}
            </CartStyle>
        )
    }
}

function mapStateToProps(state){
    return({
        cartProducts: state.cartReducer,
        currencyLabel: state.productsReducer.currency.label,
        currencySymbol: state.productsReducer.currency.symbol,
    })
}

function mapDispatchToProps(dispatch){
    return({
        addItemToCart: (product) => dispatch(addToCart(product)),
        removeItemFromCart: (product) => dispatch(removeFromCart(product))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);