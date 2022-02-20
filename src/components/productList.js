import React, {PureComponent} from "react";
import { client } from '@tilework/opus';
import spinner from "../imgs/loading-spinner-final.svg";
import { CenteredItem } from "../styledComponents/centeredItem.styled";
import ProductItem from "./productItem";
import { getAllProductsQuery } from "../queries/productQueries";

class productList extends PureComponent{ 

    state = {
        products: [],
        hasError: false,
        isLoaded: false
    }

    componentDidMount(){
        this.fetchProducts();
    }

    fetchProducts(){
        const {category} = this.props.match.params;

        document.title = `${category.charAt(0).toUpperCase() + category.slice(1)}`;
        client.post(getAllProductsQuery(category))
        .then(result => this.setState({
            products: result.category.products
        }))
        .catch(err => this.setState({
            hasError: true
        }))
        .finally(() => {this.setState({isLoaded: true})})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
            this.fetchProducts();
        }
    }

    showSpinner = () => {
        return(
            <CenteredItem>
                <img src={spinner} alt="loading-spinner"/>
            </CenteredItem>
        );
    }

    showProducts = () => {
        if (this.state.hasError){
            return(
                <CenteredItem h1_color="rgb(255,0,0)">
                    <h1>An error occurred</h1>
                </CenteredItem>
            );
        }
        else{            
            return(
                <div style={{
                    display:"flex",
                    flexWrap:"wrap"
                    }}>
                    {this.state.products.map(product => {
                        return(<ProductItem 
                                key={product.id}
                                id={product.id} 
                                brand={product.brand}
                                name={product.name} 
                                inStock={product.inStock} 
                                gallery={product.gallery[0]}
                                prices={product.prices}
                            />)
                    })}
                </div>
            )
        }
    }
    
    render(){
        const {category} = this.props.match.params;

        return(
            <div>
                <h2 style={{color:"rgb(100, 100, 100)"}}>{category.toUpperCase()}</h2>
                {this.state.isLoaded ? this.showProducts() : this.showSpinner()}
            </div>
        )
    }
}



export default productList;