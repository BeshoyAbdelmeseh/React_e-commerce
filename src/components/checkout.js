import React, { PureComponent } from "react";

class checkout extends PureComponent{

    componentDidMount(){
        document.title = `Checkout`;
    }

    render(){
        return(
            <h1>Checkout Page</h1>
        )
    }
}

export default checkout;