import styled from "styled-components";

export const ProductDescriptionStyle = styled.div`
    display: flex;
    justify-content: center;

    #gallery{
        margin-right: 2%;
        width: 10%;
        height: 550px;
        overflow: auto;
        padding-top: 7px;

        img{
            width: 80%;
            heigth: 80%;
            object-fit: contain;
            border-style: solid;
            border-color: rgba(0,0,0,0);
            margin: 0 7%;

            &: hover{
                border-style: solid;
                border-color: rgb(27, 196, 125);
                transform: scale(1.1);
                transition: all .2s ease-in-out;
            }
        }
    }

    #onePic{
        margin-right: 3%;
        width: 40%;
        img{
            heigth: 95%;
            width: 95%;
            max-height: 550px;
            object-fit: contain;
        }
    }

    #details{
        width: 25%;

        span{
            display: block;
        }

        > div{
            margin-bottom: 25px;
        }

        #brand{
            font-size: 150%;
            font-weight: bold;
        }

        #name{
            font-size: 150%;
            margin-top: 10px;
        }

        #price{
            font-weight: bold;
            margin-bottom: 10px;
        }

        #priceValue{
            font-size: 120%;
            font-weight: bold;            
        }

        button{
            width: 100%;
        }
    }

    #description{
        max-height: 200px;
        overflow: auto;
    }
`