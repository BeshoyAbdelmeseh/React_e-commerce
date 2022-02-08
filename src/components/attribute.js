import React, { Component } from 'react';
import { AttributeStyle } from '../styledComponents/attribute.styled';

class Attribute extends Component{

    textAttribute = (attribute, index) => {
        return(
            <div key={attribute.id}>
                <span className="attrName">{attribute.name}:</span>
                <div className="attrItems">{attribute.items.map(item => {
                    return(<button key={item.id}
                                    className={this.props.attributeData[index].selected === item.id ? "selectedTextItem" : "textItem"} 
                                    onClick={this.props.canChange? () => {
                                        this.props.attributeData[index].selected = item.id
                                        this.props.changeAttribute(this.props.attributeData);
                                    }: null}>
                            {item.displayValue}
                            </button>)
                })}</div>
            </div>
        )
    }

    swatchAttribute = (attribute, index) => {
        return(
            <div key={attribute.id}>
                <span className="attrName">{attribute.name}:</span>
                <div className="attrItems">{attribute.items.map(item => {
                    return(<button key={item.id}
                                    className={this.props.attributeData[index].selected === item.id ? "selectedSwatchItem" : "swatchItem"} 
                                    onClick={() => {
                                                this.props.attributeData[index].selected = item.id
                                                this.props.changeAttribute(this.props.attributeData);
                                            }}
                                    style={{backgroundColor: item.value}}>
                            </button>)
                })}</div>
            </div>
        )
    }

    render(){
        return(
            this.props.attributeData.map((attribute, index) => {
                if (attribute.type === "text"){
                    return(this.textAttribute(attribute, index))
                }
                else if (attribute.type === "swatch"){
                    return(this.swatchAttribute(attribute, index))
                }
            })
        )
    }
}

export default Attribute;