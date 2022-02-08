import styled from "styled-components"

export const ButtonStyle = styled.button`
    ${({buttonType}) =>{
        if (buttonType === "white"){
            return(`
            border: none;
            box-shadow:0px 0px 0px 1px #000 inset; 
            font-weight: bold;
            background-color: #FFF;
            color: #000;`)
        }
        else if (buttonType === "red"){
            return(`
            border: none;
            background-color: rgb(194, 24, 91);
            color: #FFF;`)
        }
        else{
            return(`
            border: none;
            background-color: rgb(27, 196, 125);
            color: #FFF;`)
        }
    }}
    cursor: pointer;
    padding: 15px;
    font-size: 100%;
    border-radius: 5px;
`