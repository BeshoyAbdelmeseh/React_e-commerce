import React, {PureComponent} from "react";
import { ProductItemStyled } from "../styledComponents/productItem.styled";
import { connect } from "react-redux";
import smallCart from "../imgs/small-cart.png"
import { Link } from "react-router-dom";
import { OutOfStock } from "../styledComponents/outOfStock.styled";

class productItem extends PureComponent{

    printCurrency(){
        const {prices, currencyLabel, currencySymbol} = this.props;

        const price = prices.filter(price => price.currency.label === currencyLabel)[0].amount;
        return(
            <p><strong>{currencySymbol}{price}</strong></p>
        )
    }

    checkInStrock(){
        const {inStock, id} = this.props;
        
        if (inStock === false){
            return(
                <Link to={"/product/" + id}>
                    <OutOfStock >
                        <p>OUT OF STOCK</p>
                    </OutOfStock>
                </Link>
            )
        }
    }

    render(){
        const {id, gallery, name, brand} = this.props;

        return(
            <ProductItemStyled>
                <Link to={"/product/" + id}>
                    <img src={gallery} alt="Item-Img"/>
                    <img id="cartImg" src={smallCart} alt="Cart-Img"/>
                </Link>
                <p>{brand + " " + name}</p>
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