import React, {Component} from "react";
import { ProductItemStyled } from "../styledComponents/productItem.styled";
import { connect } from "react-redux";
import smallCart from "../imgs/small-cart.png"
import { Link } from "react-router-dom";
import { OutOfStock } from "../styledComponents/outOfStock.styled";

class productItem extends Component{

    printCurrency(){
        const price = this.props.prices.filter(price => price.currency.label === this.props.currencyLabel)[0].amount;
        return(
            <p><strong>{this.props.currencySymbol}{price}</strong></p>
        )
    }

    checkInStrock(){
        if (this.props.inStock === false){
            return(
                <Link to={"/product/" + this.props.id}>
                    <OutOfStock >
                        <p>OUT OF STOCK</p>
                    </OutOfStock>
                </Link>
            )
        }
    }

    render(){
        return(
            <ProductItemStyled>
                <Link to={"/product/" + this.props.id}>
                    <img src={this.props.gallery} alt="Item-Img"/>
                    <img id="cartImg" src={smallCart} alt="Cart-Img"/>
                </Link>
                <p>{this.props.brand + " " + this.props.name}</p>
                {this.printCurrency()}
                {this.checkInStrock()}
            </ProductItemStyled>
        )
    }
}

function mapStateToProps(state){
    return({
        currencyLabel: state.productsReducer.currency.label,
        currencySymbol: state.productsReducer.currency.symbol,
    })
}

export default connect(mapStateToProps)(productItem);