import React, {Component, createRef} from "react";
import { client } from '@tilework/opus';
import { connect } from "react-redux";
import { ProductDescriptionStyle } from "../styledComponents/productDescription.styled";
import { setProducts } from "../redux/actions/products.actions";
import { addToCart } from "../redux/actions/cart.actions";
import spinner from "../imgs/loading-spinner-final.svg";
import { CenteredItem } from "../styledComponents/centeredItem.styled";
import { ButtonStyle } from "../styledComponents/button.styled";
import {sanitize} from "dompurify";
import Attribute from "./attribute";
import { AttributeDetailsStyle } from "../styledComponents/attribute.styled";
import { getProductQuery } from "../queries/productQueries";

class productDescription extends Component{

    state = {
        product: null,
        hasError: false,
        isLoaded: false,
        selectedImageIndex: 0,
        attributes: []
    }

    descriptionElement = createRef();

    async componentDidMount(){
        const {match:{params: {id}}, cachedProducts, cacheProduct} = this.props;
        
        document.title = `${id.charAt(0).toUpperCase() + id.slice(1)}`;
        const cachedProduct = cachedProducts.filter(product => product.id === id);
        if (cachedProduct.length > 0){
            let attributes = [];
            await cachedProduct[0].attributes.map(attribute => {
                return(attributes.push({...attribute, selected: attribute.items[0].id}))
            })
            this.setState({ 
                product: cachedProduct[0],  
                isLoaded: true,
                attributes: attributes,
            });
            this.showSanitizedDescription();
        }
        else{
            client.post(getProductQuery(id))
            .then(result => {
                let attributes = [];
                result.product.attributes.map(attribute => {
                    return(attributes.push({...attribute, selected: attribute.items[0].id}))
                })
                this.setState({ 
                    product: {...result.product, id: id},
                    attributes: attributes,
                });
                const productToCache = {...result.product, id: id};
                cacheProduct(productToCache);
                }
            )
            .catch(err => this.setState({
                hasError: true
            }))
            .finally(() => {
                this.setState({isLoaded: true});
                this.showSanitizedDescription();
            })
        }
    }

    printCurrency(){
        const {currencyLabel, currencySymbol} = this.props;

        const price = this.state.product.prices.filter(price => price.currency.label === currencyLabel)[0].amount;
        return(
            <>{currencySymbol}{price}</>
        )
    }

    changeImage = (imageIndex) => {
        this.setState({
            selectedImageIndex: imageIndex
        })
    }

    spawnGallery = () => {
        return(
            <div id="gallery">
                {this.state.product.gallery.map((image, index) => {
                    return(
                        <img src={image} alt="galleryImage" key={index} onClick={() => this.changeImage(index)}/>
                    )
                })}
            </div>
        )
    }

    changeAttribute = (newAttributes) => {
        this.setState({attributes: newAttributes});
    }

    showSanitizedDescription = () => {
        const sanitizedDescription = sanitize(this.state.product.description);
        this.descriptionElement.current.innerHTML = sanitizedDescription
    }

    spawnDetails = () => {
        return(
            <div id="details">
                <div>
                    <span id="brand">{this.state.product.brand}</span>
                    <span id="name">{this.state.product.name}</span>
                </div>
                <AttributeDetailsStyle>
                    <Attribute 
                    attributeData={this.state.attributes}
                    changeAttribute={this.changeAttribute}
                    canChange={true}
                    />
                </AttributeDetailsStyle>
                <div>
                    <span id="price">Price:</span>
                    <span id="priceValue">{this.printCurrency()}</span>
                </div>
                {this.state.product.inStock === true ? <div>
                    <ButtonStyle onClick={() => this.addToCart()}>
                        ADD TO CART
                    </ButtonStyle>
                </div>: <ButtonStyle buttonType="red">
                        OUT OF STOCK
                    </ButtonStyle>}
                <div id="description" ref={this.descriptionElement}></div>
            </div>
        )
    }

    addToCart = () => {
        const {addItemToCart} = this.props;

        const selectedAttributes = [];
        this.state.attributes.map(attribute =>
            selectedAttributes.push({
                id: attribute.id,
                type: attribute.type,
                name: attribute.name,
                items: attribute.items,
                selected: attribute.selected,
            })
        )
        const specialId = `${this.state.product.id}_${selectedAttributes.map(attribute => `${attribute.id}_${attribute.selected}_`)}`;
        const product = {
            id: this.state.product.id,
            brand: this.state.product.brand,
            name: this.state.product.name,
            prices: this.state.product.prices,
            image: this.state.product.gallery[0],
            attributes: selectedAttributes,
            specialId: specialId,
        }
        addItemToCart(product);
    }

    showSpinner = () => {
        return(
            <CenteredItem>
                <img src={spinner} alt="loading-spinner"/>
            </CenteredItem>
        );
    }

    showProduct = () => {
        if (this.state.hasError){
            return(
                <CenteredItem h1_color="rgb(255,0,0)">
                    <h1>An error occurred</h1>
                </CenteredItem>
            );
        }
        else{            
            return(
                <ProductDescriptionStyle>
                    {this.spawnGallery()}
                    <div id="onePic">
                        <img src={this.state.product.gallery[this.state.selectedImageIndex]} alt="bigPic"/>
                    </div>
                    {this.spawnDetails()}
                </ProductDescriptionStyle>
            )
        }
    }

    render(){
        return(           
            <>
                {this.state.isLoaded ? this.showProduct() : this.showSpinner()}
            </>
        )
    }
}

function mapStateToProps(state){
    return({
        cachedProducts: state.productsReducer.products,
        currencySymbol: state.productsReducer.currency.symbol,
        currencyLabel: state.productsReducer.currency.label,
        tempCart: state.cartReducer
    })
}

function mapDispatchToProps(dispatch){
    return({
        cacheProduct: (product) => dispatch(setProducts(product)),
        addItemToCart: (product) => dispatch(addToCart(product))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(productDescription);