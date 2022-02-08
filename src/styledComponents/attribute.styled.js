import styled from "styled-components";

export const AttributeDetailsStyle = styled.div`

    margin-bottom: 20px;

    > div{
        margin-bottom: 20px;
    }

    .attrName{
        font-weight: bold;
        margin-bottom: 10px;
    }

    .attrItems{
        display: flex;
    }

    .textItem{
        margin-right: 10px;
        padding: 10px 15px;
        background-color: rgb(255,255,255);
        border-style: solid;
        border-width: 1px;
        border-color: #000000;

        &: hover{
            background-color: rgb(240,240,240);
            transform: scale(1.07);
            transition: all .2s ease-in-out;
        }
    }

    .selectedTextItem{
        margin-right: 10px;
        padding: 10px 15px;
        background-color: rgb(29,31,34);
        color: #FFF;
        border-style: none;
    }

    .swatchItem{
        margin-right: 10px;
        padding: 10px 15px;
        border-style: solid;
        border-width: 1px;
        border-color: rgb(219,223,232);
        outline-style: solid;
        outline-width: 1px;
        outline-color: rgba(29,31,34,0.5);

        &: hover{
            transform: scale(1.15);
            transition: all .2s ease-in-out;
        }
    }

    .selectedSwatchItem{
        margin-right: 10px;
        padding: 10px 15px;
        border-style: solid;
        border-width: 2px;
        border-color: rgba(29,31,34,0.5);
        outline-style: solid;
        outline-width: 2px;
        outline-color: rgb(29,31,34);
    }
`

export const AttributeNavbarCartStyle = styled.div`

    div{
        margin-bottom: 3px;
    }

    .attrName{
        display: none;
    }

    .textItem{
        margin: 2px;
        padding: 5px;
        background-color: rgba(128,128,128, 0.4);
        color: rgba(128,128,128, 0.6);
        border-style: solid;
        border-width: 1px;
        border-color: rgba(128,128,128, 0.6);
    }

    .selectedTextItem{
        margin: 2px;
        padding: 5px;
        background-color: #FFF;
        color: #000;
        border-style: solid;
        border-width: 1px;
        border-color: #000;
    }

    .swatchItem{
        margin: 2px;
        padding: 10px;
        border-style: solid;
        border-width: 1px;
        border-color: rgb(219,223,232);
        outline-style: solid;
        outline-width: 1px;
        outline-color: rgba(29,31,34,0.5);
    }

    .selectedSwatchItem{
        margin-right: 2px;
        padding: 10px;
        border-style: solid;
        border-width: 2px;
        border-color: rgba(29,31,34,0.5);
        outline-style: solid;
        outline-width: 2px;
        outline-color: rgb(29,31,34);
    }
`

export const AttributeCartStyle = styled.div`

    div{
        margin-bottom: 10px;
    }

    .attrName{
        display: none;
    }

    .textItem{
        margin-right: 10px;
        padding: 10px 15px;
        background-color: rgb(255,255,255);
        border-style: solid;
        border-width: 1px;
        border-color: #000000;
    }

    .selectedTextItem{
        margin-right: 10px;
        padding: 10px 15px;
        background-color: rgb(29,31,34);
        color: #FFF;
        border-style: none;
    }

    .swatchItem{
        margin-right: 10px;
        padding: 10px 15px;
        border-style: solid;
        border-width: 1px;
        border-color: rgb(219,223,232);
        outline-style: solid;
        outline-width: 1px;
        outline-color: rgba(29,31,34,0.5);
    }

    .selectedSwatchItem{
        margin-right: 10px;
        padding: 10px 15px;
        border-style: solid;
        border-width: 2px;
        border-color: rgba(29,31,34,0.5);
        outline-style: solid;
        outline-width: 2px;
        outline-color: rgb(29,31,34);
    }
`