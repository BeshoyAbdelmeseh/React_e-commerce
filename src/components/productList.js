import React, {Component} from "react";
import { Query, Field, client } from '@tilework/opus';
import spinner from "../imgs/loading-spinner-final.svg";
import { CenteredItem } from "../styledComponents/centeredItem.styled";
import ProductItem from "./productItem";

class productList extends Component{ 

    state = {
        products: [],
        hasError: false,
        isLoaded: false
    }

    componentDidMount(){
        this.fetchProducts();
    }

    fetchProducts(){
        client.setEndpoint("http://localhost:4000");

        const query = new Query('category', true)
            .addArgument('input', 'CategoryInput', {"title": this.props.match.params.category})
            .addField(new Field('products', true)
                .addFieldList(['id', 'name', 'inStock', 'gallery', 'brand'])
                .addField(new Field('prices', true)
                    .addFieldList(['amount'])
                    .addField(new Field('currency', true)
                        .addFieldList(['label'])
                    )
                )
            )

        client.post(query)
        .then(result => this.setState({
            products: result.category.products
        }))
        .catch(err => this.setState({
            hasError: true
        }))
        .finally(() => this.setState({isLoaded: true}))
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
        return(
            <div>
                <h2 style={{color:"rgb(100, 100, 100)"}}>{this.props.match.params.category.toUpperCase()}</h2>
                {this.state.isLoaded ? this.showProducts() : this.showSpinner()}
            </div>
        )
    }
}



export default productList;