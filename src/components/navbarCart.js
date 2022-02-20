import React, { PureComponent } from "react";
import { NavbarCartStyle } from "../styledComponents/navbar.styled";
import { CenteredItem } from "../styledComponents/centeredItem.styled";
import Attribute from "./attribute";
import { connect } from "react-redux";
import { AttributeNavbarCartStyle } from "../styledComponents/attribute.styled";
import { addToCart, removeFromCart } from "../redux/actions/cart.actions";
import { ButtonStyle } from "../styledComponents/button.styled";
import { Link } from "react-router-dom";

class NavbarCart extends PureComponent{

    spawnCartItems = () => {
        const {cartProducts} = this.props;
        
        return(
            <>
                <div>
                    <strong>My bag, </strong>
                    <span>{cartProducts.length} {cartProducts.length > 1 ? "items" : "item"}</span>
                </div>
                <div id="itemsDiv">
                    {cartProducts.map(product => {
                        return(
                            <div key={product.specialId} className="itemContainer">
                                <div className="details">
                                    <p>{product.brand}</p>
                                    <p>{product.name}</p>
                                    <div>{this.printCurrency(product.prices)}</div>
                                    <AttributeNavbarCartStyle>
                                        <Attribute 
                                        attributeData={product.attributes}
                                        canChange={false}
                                        />
                                    </AttributeNavbarCartStyle>
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
                        )
                    })}
                </div>
                <div id="total">
                    <p>Total:</p>
                    {this.printTotalPrice()}
                </div>
                <div id="buttons">
                    <Link to="/cart"><ButtonStyle buttonType="white" >VIEW BAG</ButtonStyle></Link>
                    <Link to="/checkout"><ButtonStyle>CHECK OUT</ButtonStyle></Link>
                </div>
            </>
        )
    }

    printTotalPrice = () =>{
        const {cartProducts, currencyLabel, currencySymbol} = this.props;

        let total = 0;
        cartProducts.map(product => {
            const price = product.prices.filter(price => price.currency.label === currencyLabel)[0].amount;
            return total += (product.count * price);
        })
        return(<p>{currencySymbol}{total.toFixed(2)}</p>)
    }

    addProdcut = (product) => {
        this.props.addItemToCart(product);
    }

    removeProduct = (product) => {
        this.props.removeItemFromCart(product);
    }

    printCurrency = (prices) =>{
        const {currencyLabel, currencySymbol} = this.props;

        const price = prices.filter(price => price.currency.label === currencyLabel)[0].amount;
        return(
            <p><strong>{currencySymbol}{price}</strong></p>
        )
    }

    render(){
        const {cartProducts} = this.props;

        return(
            <NavbarCartStyle>
                {cartProducts.length > 0 ? this.spawnCartItems() : <CenteredItem><p>Cart is empty.</p></CenteredItem>}
            </NavbarCartStyle>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavbarCart);