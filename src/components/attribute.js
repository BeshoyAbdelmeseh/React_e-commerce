import React, { Component } from 'react';

class Attribute extends Component{
    textAttribute = (attribute, index) => {
        const {attributeData, canChange, changeAttribute} = this.props;
        return(
            <div key={attribute.id}>
                <span className="attrName">{attribute.name}:</span>
                <div className="attrItems">{attribute.items.map(item => {
                    return(<button key={item.id}
                                    className={attributeData[index].selected === item.id ? "selectedTextItem" : "textItem"} 
                                    onClick={canChange? () => {
                                        attributeData[index].selected = item.id
                                        changeAttribute(attributeData);
                                    }: null}>
                            {item.displayValue}
                            </button>)
                })}</div>
            </div>
        )
    }

    swatchAttribute = (attribute, index) => {
        const {attributeData, canChange, changeAttribute} = this.props;
        return(
            <div key={attribute.id}>
                <span className="attrName">{attribute.name}:</span>
                <div className="attrItems">{attribute.items.map(item => {
                    return(<button key={item.id}
                                    className={attributeData[index].selected === item.id ? "selectedSwatchItem" : "swatchItem"} 
                                    onClick={canChange? () => {
                                                attributeData[index].selected = item.id
                                                changeAttribute(attributeData);
                                            }: null}
                                    style={{backgroundColor: item.value}}>
                            </button>)
                })}</div>
            </div>
        )
    }

    render(){
        const{attributeData} = this.props;
        return(
            attributeData.map((attribute, index) => {
                if (attribute.type === "text"){
                    return(this.textAttribute(attribute, index))
                }
                else if (attribute.type === "swatch"){
                    return(this.swatchAttribute(attribute, index))
                }
                return null;
            })
        )
    }
}

export default Attribute;