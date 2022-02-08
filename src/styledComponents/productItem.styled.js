import styled from "styled-components";

export const ProductItemStyled = styled.div`
    margin: 30px auto;
    width: 28%;
    position: relative;
    
    img{
        width: 95%; 
        height: 250px;
        padding: 5px;
        object-fit: contain;
    }

    p{
        margin: 20px;
    }

    #cartImg{
        display: none;
        cursor: pointer;
        height: 50px;
        width: 50px;
        position: absolute;
        top: 62%;
        left: 75%;
    }

    &:hover{
        box-shadow: 0 0 10px #888888;
        transform: scale(1.1);
        transition: all .2s ease-in-out;
        #cartImg{
            display: block;
        }
    }
`